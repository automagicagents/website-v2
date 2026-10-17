"""Three chrome four-point stars. Run:
Blender --background --python stars3.py -- <out_dir>
Saves stars3.blend and stars3.png in out_dir.
"""
import bpy, bmesh, math, sys, os
import numpy as np
from mathutils import Vector

out_dir = sys.argv[sys.argv.index("--") + 1] if "--" in sys.argv else os.getcwd()

# ---------- scene reset ----------
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# ---------- star geometry ----------
SEG = 1024         # samples around the outline
RINGS = 80         # rings from center to edge
EXP = 3.8          # >2 makes the sides concave (pinched arms)
ARM = {"top": 1.0, "bottom": 1.08, "left": 0.98, "right": 0.98}
H_FRONT = 0.13
H_BACK = H_FRONT  # back as rounded as the front
PILLOW = None
PROFILE = 0.75

def outline(t):
    c, s = math.cos(t), math.sin(t)
    ax = ARM["right"] if c >= 0 else ARM["left"]
    ay = ARM["top"] if s >= 0 else ARM["bottom"]
    x = ax * math.copysign(abs(c) ** EXP, c)
    y = ay * math.copysign(abs(s) ** EXP, s)
    return x, y

def height(rho, h):
    # pillowy profile: full at the center, tapering to a sharp edge
    return h * (1.0 - rho ** 1.6) ** 0.75

def tint(x, y):
    """Colour per direction: top blue, left lavender, right pink, bottom champagne."""
    cols = {
        (0, 1): (0.18, 0.36, 0.95),
        (-1, 0): (0.55, 0.42, 0.95),
        (1, 0): (1.00, 0.35, 0.60),
        (0, -1): (0.95, 0.72, 0.45),
    }
    ang = math.atan2(y, x)
    acc = [0.0, 0.0, 0.0]; wsum = 0.0
    for (dx, dy), c in cols.items():
        d = math.atan2(dy, dx)
        diff = math.atan2(math.sin(ang - d), math.cos(ang - d))
        w = math.exp(-(diff / 0.75) ** 2)
        wsum += w
        for i in range(3):
            acc[i] += c[i] * w
    return [a / wsum for a in acc] + [1.0]

# --- outline, evenly spaced by arc length ---
SPACING = 0.007

def quadrant_even(q):
    t = np.linspace(q * np.pi / 2, (q + 1) * np.pi / 2, 8000)
    pts = np.array([outline(x) for x in t])
    s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
    targ = np.linspace(0, s[-1], max(8, int(s[-1] / SPACING)), endpoint=False)
    return np.stack([np.interp(targ, s, pts[:, 0]), np.interp(targ, s, pts[:, 1])], 1)

edge2 = np.concatenate([quadrant_even(q) for q in range(4)])
dense = np.array([outline(t) for t in np.linspace(0, 2 * np.pi, 6000, endpoint=False)])

# --- inflate: solve Poisson (lap z = -1, z = 0 on the outline) for a smooth balloon shape ---
dense_ang = np.arctan2(dense[:, 1], dense[:, 0])
dense_rad = np.hypot(dense[:, 0], dense[:, 1])
order = np.argsort(dense_ang)
dense_ang, dense_rad = dense_ang[order], dense_rad[order]
EXT = 1.15

def star_mask(n):
    xs = np.linspace(-EXT, EXT, n)
    X, Y = np.meshgrid(xs, xs)
    R = np.interp(np.arctan2(Y, X), dense_ang, dense_rad, period=2 * np.pi)
    return np.hypot(X, Y) < R

def solve(n, init=None, iters=1500):
    m = star_mask(n)
    h2 = (2 * EXT / (n - 1)) ** 2
    z = np.zeros((n, n)) if init is None else init
    for _ in range(iters):
        nb = np.roll(z, 1, 0) + np.roll(z, -1, 0) + np.roll(z, 1, 1) + np.roll(z, -1, 1)
        z = np.where(m, 0.25 * (nb + h2), 0.0)
    return z

phi = None
for n in (80, 160, 320, 640, 1024):
    if phi is not None:
        k = phi.shape[0]
        xs_old = np.linspace(0, 1, k); xs_new = np.linspace(0, 1, n)
        phi = np.array([np.interp(xs_new, xs_old, row) for row in phi])
        phi = np.array([np.interp(xs_new, xs_old, col) for col in phi.T]).T
    phi = solve(n, phi, 1500 if n < 640 else 2000)
phi /= phi.max()
GN = phi.shape[0]

def sample(px, py):
    fx = (px + EXT) / (2 * EXT) * (GN - 1)
    fy = (py + EXT) / (2 * EXT) * (GN - 1)
    x0 = np.clip(np.floor(fx).astype(int), 0, GN - 2); y0 = np.clip(np.floor(fy).astype(int), 0, GN - 2)
    tx, ty = fx - x0, fy - y0
    return ((1 - tx) * (1 - ty) * phi[y0, x0] + tx * (1 - ty) * phi[y0, x0 + 1]
            + (1 - tx) * ty * phi[y0 + 1, x0] + tx * ty * phi[y0 + 1, x0 + 1])

from mathutils import Vector as V2
from mathutils.geometry import delaunay_2d_cdt
from mathutils.kdtree import KDTree

def inside(x, y):
    return np.hypot(x, y) < np.interp(np.arctan2(y, x), dense_ang, dense_rad, period=2 * np.pi)

# interior points on a hexagonal lattice, kept a little away from the outline
kd = KDTree(len(edge2))
for i, (x, y) in enumerate(edge2):
    kd.insert((x, y, 0.0), i)
kd.balance()
interior = []
dy = SPACING * math.sqrt(3) / 2
for j, y in enumerate(np.arange(-1.15, 1.15, dy)):
    for x in np.arange(-1.15, 1.15, SPACING) + (SPACING / 2 if j % 2 else 0):
        if inside(x, y) and kd.find((x, y, 0.0))[2] > 0.7 * SPACING:
            interior.append((x, y))

n_edge = len(edge2)
pts2 = [V2((x, y)) for x, y in edge2] + [V2(p) for p in interior]
vout, _, fout, orig_v, _, _ = delaunay_2d_cdt(pts2, [], [list(range(n_edge))], 1, 1e-7)
XY = np.array([v[:] for v in vout])
on_edge = np.array([any(i < n_edge for i in ov) for ov in orig_v])
tris = np.array(fout)

# height from the Poisson field, then a light smoothing pass over the mesh itself
PHI = np.clip(sample(XY[:, 0], XY[:, 1]), 0, 1)
PHI[on_edge] = 0.0
e = np.concatenate([tris[:, [0, 1]], tris[:, [1, 2]], tris[:, [2, 0]]])
e = np.concatenate([e, e[:, ::-1]])
deg = np.bincount(e[:, 0], minlength=len(XY)).astype(float)
for _ in range(250):
    acc = np.zeros(len(XY))
    np.add.at(acc, e[:, 0], PHI[e[:, 1]])
    PHI = 0.5 * PHI + 0.5 * acc / np.maximum(deg, 1)
    PHI[on_edge] = 0.0

bm = bmesh.new()
front = [bm.verts.new((x, y, H_FRONT * p ** PROFILE)) for (x, y), p in zip(XY, PHI)]
back = [fv if edge else bm.verts.new((x, y, -H_BACK * p ** PROFILE))
        for fv, edge, (x, y), p in zip(front, on_edge, XY, PHI)]
for a, b, c in tris:
    bm.faces.new((front[a], front[b], front[c]))
    if not (on_edge[a] and on_edge[b] and on_edge[c]):
        bm.faces.new((back[c], back[b], back[a]))
bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])

bm.normal_update()
mesh = bpy.data.meshes.new("Star")
bm.to_mesh(mesh)
bm.free()

col = mesh.color_attributes.new("Tint", "FLOAT_COLOR", "POINT")
for v in mesh.vertices:
    c = tint(v.co.x, v.co.y)
    d = 0.6 + 0.4 * min(1.0, math.hypot(v.co.x, v.co.y) / 0.35)  # deeper tone in the middle
    col.data[v.index].color = (c[0] * d, c[1] * d, c[2] * d, 1.0)
mesh.shade_smooth()

gy_grid, gx_grid = np.gradient(phi, 2 * EXT / (GN - 1))

def sample_grid(g, px, py):
    fx = (px + EXT) / (2 * EXT) * (GN - 1)
    fy = (py + EXT) / (2 * EXT) * (GN - 1)
    x0 = np.clip(np.floor(fx).astype(int), 0, GN - 2); y0 = np.clip(np.floor(fy).astype(int), 0, GN - 2)
    tx, ty = fx - x0, fy - y0
    return ((1 - tx) * (1 - ty) * g[y0, x0] + tx * (1 - ty) * g[y0, x0 + 1]
            + (1 - tx) * ty * g[y0 + 1, x0] + tx * ty * g[y0 + 1, x0 + 1])

co = np.array([v.co[:] for v in mesh.vertices])
gx = sample_grid(gx_grid, co[:, 0], co[:, 1])
gy = sample_grid(gy_grid, co[:, 0], co[:, 1])
p_raw = np.clip(sample(co[:, 0], co[:, 1]), 1e-4, 1)
k = H_FRONT * PROFILE * p_raw ** (PROFILE - 1)           # d(height)/d(phi)
side = np.sign(co[:, 2])
nrm = np.stack([-k * gx, -k * gy, side], 1)
rim = np.abs(co[:, 2]) < 1e-7                              # outline: normal lies flat, pointing out
nrm[rim] = np.stack([-gx[rim], -gy[rim], np.zeros(rim.sum())], 1)
nrm /= np.linalg.norm(nrm, axis=1, keepdims=True) + 1e-12
mesh.normals_split_custom_set_from_vertices([tuple(n) for n in nrm])

star = bpy.data.objects.new("Star", mesh)
scene.collection.objects.link(star)
star.location.z = 0.25

# ---------- metallic material ----------
mat = bpy.data.materials.new("Chrome")
mat.use_nodes = True
nt = mat.node_tree
bsdf = nt.nodes["Principled BSDF"]
attr = nt.nodes.new("ShaderNodeAttribute")
attr.attribute_name = "Tint"
nt.nodes.remove(attr)
bsdf.inputs["Base Color"].default_value = (0.93, 0.93, 0.95, 1)
bsdf.inputs["Metallic"].default_value = 1.0
bsdf.inputs["Roughness"].default_value = 0.08
bsdf.inputs["Coat Weight"].default_value = 0.0
bsdf.inputs["Coat Roughness"].default_value = 0.03
star.data.materials.append(mat)

LAYOUT = {  # name: (x, y, scale) traced from the reference
    "Star_Large": (0.16, -0.47, 1.0),
    "Star_Medium": (-0.67, 0.36, 0.57),
    "Star_Small": (-0.14, 1.02, 0.35),
}
for name, (x, y, s) in LAYOUT.items():
    o = star if name == "Star_Large" else bpy.data.objects.new(name, mesh)
    if o is not star:
        scene.collection.objects.link(o)
    o.name = name
    o.location = (x, y, 0.25)
    o.scale = (s, s, s)

# ---------- environment: chrome studio map (also written for the web viewer) ----------
# Scene directions: x right, y toward the top of the frame, z toward the camera.
def studio(dx, dy, dz):
    dz = np.abs(dz)  # mirror front/back: turning the stars 180 degrees gives the same look
    # flat centre and downward slopes see black, upward slopes see a bright sky
    v = np.interp(dy, [-1, -0.5, 0.0, 0.35, 1], [0.5, 0.4, 0.5, 0.95, 1.0])
    # black pool: only straight below the middle, so the arms' side slopes stay silver
    dark = np.clip((0.15 - dy) / 0.3, 0, 1) ** 1.5 * np.clip((dy + 0.85) / 0.25, 0, 1) * np.exp(-(dx / 0.75) ** 4)
    v = v * (1 - dark)
    v = v * np.interp(dz, [0.8, 0.98], [1.0, 0.6])             # straight back at the camera: dimmer
    side_light = np.interp(dz, [0.0, 0.35], [0.6, 0.0])            # around the horizon: soft white
    v = v * (1 - side_light) + 0.9 * side_light                     # -> soft light edges
    for (lx, ly, lz), power, rad in (((-0.45, 0.65, 0.6), 2.0, 0.35), ((0.55, 0.5, 0.65), 1.0, 0.3)):
        n = math.sqrt(lx * lx + ly * ly + lz * lz)
        cosang = (dx * lx + dy * ly + dz * lz) / n
        v = v + power * np.clip((cosang - math.cos(rad)) / (1 - math.cos(rad)), 0, 1) ** 2
    return v

def write_env(path, w, h, fmt, convention):
    u = (np.arange(w) + 0.5) / w
    vv = (np.arange(h) + 0.5) / h
    U, V = np.meshgrid(u, vv)                      # row 0 = bottom in Blender's pixel buffer
    lat = (V - 0.5) * np.pi
    if convention == "blender":                    # Cycles: u = -atan2(y, x)/2pi + 0.5, up = +z
        phi = (0.5 - U) * 2 * np.pi
        bx, by, bz = np.cos(lat) * np.cos(phi), np.cos(lat) * np.sin(phi), np.sin(lat)
        # the Blender scene is z-up with the camera looking down: scene (x, y, z) == world (x, y, z)
        val = studio(bx, by, bz)
    else:                                          # three.js: u = atan2(z, x)/2pi + 0.5, up = +y
        phi = (U - 0.5) * 2 * np.pi
        val = studio(np.cos(lat) * np.cos(phi), np.sin(lat), np.cos(lat) * np.sin(phi))
    img = bpy.data.images.new(os.path.basename(path), w, h, alpha=False, float_buffer=True)
    px = np.ones((h, w, 4), dtype=np.float32)
    px[..., :3] = val[..., None]
    img.pixels.foreach_set(px.ravel())
    img.filepath_raw = path
    img.file_format = fmt
    img.save()
    return img

env_path = os.path.join(out_dir, "studio_env.exr")
write_env(env_path, 2048, 1024, "OPEN_EXR", "blender")
os.makedirs(os.path.join(out_dir, "web"), exist_ok=True)
write_env(os.path.join(out_dir, "web", "studio.hdr"), 2048, 1024, "HDR", "three")

world = bpy.data.worlds.new("Studio")
scene.world = world
world.use_nodes = True
wn = world.node_tree
env_node = wn.nodes.new("ShaderNodeTexEnvironment")
env_node.image = bpy.data.images.load(env_path)
env_node.image.colorspace_settings.name = "Linear Rec.709"
wn.links.new(env_node.outputs["Color"], wn.nodes["Background"].inputs["Color"])

# ---------- camera ----------
cam_data = bpy.data.cameras.new("Cam")
cam_data.type = "ORTHO"
cam_data.ortho_scale = 3.9
cam_data.shift_y = 0.0
cam = bpy.data.objects.new("Cam", cam_data)
scene.collection.objects.link(cam)
cam.location = (0, 0, 10)
scene.camera = cam

# ---------- render ----------
scene.render.engine = "CYCLES"
scene.cycles.samples = 192
scene.cycles.use_denoising = True
try:
    prefs = bpy.context.preferences.addons["cycles"].preferences
    prefs.compute_device_type = "METAL"
    prefs.get_devices()
    for d in prefs.devices:
        d.use = True
    scene.cycles.device = "GPU"
except Exception:
    pass
scene.render.resolution_x = scene.render.resolution_y = 1400
scene.render.film_transparent = True
scene.view_settings.view_transform = "Standard"
scene.view_settings.look = "None"
scene.render.image_settings.file_format = "PNG"
scene.render.image_settings.color_mode = "RGBA"

bpy.ops.wm.save_as_mainfile(filepath=os.path.join(out_dir, "stars3.blend"))

raw = os.path.join(out_dir, "stars3_raw.png")
scene.render.filepath = raw
bpy.ops.render.render(write_still=True)

# composite over white background
img = bpy.data.images.load(raw)
px = np.array(img.pixels[:]).reshape(-1, 4)
a = px[:, 3:4]
rgb = px[:, :3] * a + (1 - a) * 0.784
img_out = bpy.data.images.new("final", img.size[0], img.size[1], alpha=False)
img_out.pixels = np.concatenate([rgb, np.ones_like(a)], axis=1).ravel().tolist()
img_out.filepath_raw = os.path.join(out_dir, "stars3.png")
img_out.file_format = "PNG"
img_out.save()
os.remove(raw)
print("DONE")
