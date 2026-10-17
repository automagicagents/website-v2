"""Export the three chrome stars, with depth, for the web.
Blender --background stars3.blend --python export_stars3_web.py -- <web_dir>
Writes stars3.glb into web_dir (stars3.py already writes web/studio.hdr).
"""
import bpy, sys, os

web = sys.argv[sys.argv.index("--") + 1]
scene = bpy.context.scene
stars = [o for o in bpy.data.objects if o.name.startswith("Star_")]

# depth toward the viewer (glTF +Z): large in front, small at the back.
# Floating and the hover spin are done in the web page (index.html), not baked in here.
DEPTH = {"Star_Large": 0.35, "Star_Medium": 0.0, "Star_Small": -0.35}

# parent everything to an empty so the group stands upright (+Y up, front toward +Z in glTF)
root = bpy.data.objects.new("Stars", None)
scene.collection.objects.link(root)
root.rotation_euler = (1.5708, 0, 0)

for o in stars:
    o.parent = root
    o.location.z = DEPTH[o.name]

bpy.ops.object.select_all(action="DESELECT")
root.select_set(True)
for o in stars:
    o.select_set(True)
bpy.context.view_layer.objects.active = root
bpy.ops.export_scene.gltf(
    filepath=os.path.join(web, "stars3.glb"),
    export_format="GLB",
    use_selection=True,
    export_vertex_color="NONE",
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=7,
    export_animations=False,
)

print("DONE")
