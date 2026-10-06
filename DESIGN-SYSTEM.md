# Automagic Design System

**Versie:** 2.0 (Design Refresh)  
**Laatst bijgewerkt:** 6 oktober 2026

---

## Overzicht

Dit design system definieert de visuele taal van Automagic: kleuren, typografie, spacing, componenten en interacties. Het is gebouwd op een foundation van CSS custom properties voor maintainability en consistency.

---

## Kleuren

### Brand Gradient (Hologram)

De signature hologram gradient wordt gebruikt als accent, niet als dominant element.

```css
--hologram-gradient: linear-gradient(
  135deg,
  color-mix(in srgb, #3A86FF 50%, #fff),     /* Blauw */
  color-mix(in srgb, #8338EC 50%, #fff) 25%, /* Paars */
  color-mix(in srgb, #FF006E 50%, #fff) 50%, /* Roze */
  color-mix(in srgb, #FB5607 50%, #fff) 75%, /* Oranje */
  color-mix(in srgb, #FFBE0B 50%, #fff)      /* Geel */
);
```

**Gebruik:**
- Buttons borders (gradient ring rond zwarte pill)
- Hover states op cards (10% opacity border)
- "Aanbevolen" badges
- Decoratieve accenten

**Niet gebruiken voor:**
- Grote vlakken of achtergronden
- Body text
- Icons (tenzij decoratief)

### Neutral Palette

**Grijs schaal (8 tinten):**
- `--_color---grey--01`: #1a1a1a (hoofdtekst, donkerste)
- `--_color---grey--02`: #292929
- `--_color---grey--03`: #525252
- `--_color---grey--04`: #a6a6a6
- `--_color---grey--05`: #b8b8b8
- `--_color---grey--06`: #cdcdcd
- `--_color---grey--07`: #e6e6e6
- `--_color---grey--08`: #f2f2f2 (achtergronden, lichtste)

**Zwart & wit:**
- `--_color---black--01`: #000000
- `--_color---white--01`: #ffffff

**Surface colors (achtergronden):**
- Hero: #1a1a1a (dark)
- Testimonials: #0f0f0f (intentional dark section)
- About, main sections: #ffffff (clean white)
- FAQ, alternating: #fafafa (very light grey)

### Transparante varianten

Voor overlays en glassmorphism:
- `--_color---white--02` tot `--_color---white--07`: rgba(255, 255, 255, 0.8 → 0.05)
- `--_color---black--02` tot `--_color---black--07`: rgba(0, 0, 0, 0.8 → 0.05)

---

## Typografie

### Font Family

**Primary:** Funnel Display (Google Fonts, variable weight 300-800)
- Modern, geometric sans-serif
- Variabel, ondersteunt alle weights
- Fallback: Arial, sans-serif
- **font-display: swap** voor performance

### Font Weights

- **400 (normal):** Body text, captions
- **500 (medium):** Section headings (H2-H6), emphasized text
- **600 (semibold):** Eyebrow labels, pricing, buttons
- **700 (bold):** Hero heading (H1), call-outs

### Font Sizes

**Headings:**
- H1 (hero): 5rem (80px) → 4rem tablet → 2.5rem mobiel
- H2 (section): 4rem (64px) → 2.75rem tablet → 2.25rem mobiel
- H3: 4rem → 2.5rem tablet → 2rem mobiel
- H4: 3.5rem → 2rem tablet → 1.75rem mobiel
- H5: 3rem → 1.75rem tablet → 1.5rem mobiel
- H6: 2rem → 1.5rem tablet → 1rem mobiel

**Titles & labels:**
- Title XL: 3rem (48px)
- Title L: 2rem (32px)
- Title M: 1.5rem (24px)
- Title S: 1.25rem (20px)
- Eyebrow: 0.8125rem (13px)

**Body text:**
- Body L: 1.125rem (18px) - hero subheading, testimonials
- Body M: 1rem (16px) - default body
- Body Feature: 0.9375rem (15px) - feature lists, captions
- Body S: 0.875rem (14px) - fine print
- Body XS: 0.75rem (12px) - legal text

### Line Heights

- Tight (1em): Large headings (H1, H2)
- Snug (1.1em): Medium headings (H3, H4)
- Normal (1.2em): Small headings (H5, H6)
- Comfortable (1.5em): Hero subheading
- Relaxed (1.6em): Feature lists
- Default (1.375em): Body text

### Letter Spacing

**Verbeterd voor leesbaarheid:**
- Body: -0.01em (relaxed van -0.03em)
- Headings: -0.04em (relaxed van -0.06em)
- Eyebrow labels: +0.05em (expanded voor uppercase)

### Text Contrast (WCAG AA compliant)

**Minimum ratios:**
- Body text (16px): 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1

**Implementatie:**
- Hero subheading: rgba(255, 255, 255, 0.9) op #1a1a1a = ~15:1 ✅
- Footer links: rgba(255, 255, 255, 0.85) op dark = ~12:1 ✅
- Stats: #757575 op wit = ~4.6:1 ✅
- Form placeholders: rgba(255, 255, 255, 0.6) op dark inputs = ~5:1 ✅

---

## Spacing

### 8px Base Scale

Alle spacing is gebaseerd op 8px increments (0.5rem) voor consistency:

```css
--space-1:  0.5rem;  /* 8px */
--space-2:  1rem;    /* 16px */
--space-3:  1.5rem;  /* 24px */
--space-4:  2rem;    /* 32px */
--space-5:  2.5rem;  /* 40px */
--space-6:  3rem;    /* 48px */
--space-8:  4rem;    /* 64px */
--space-10: 5rem;    /* 80px */
--space-12: 6rem;    /* 96px */
```

### Section Spacing (verbeterd - tighter)

**Desktop:**
- XMedium: 5rem (was 6.25rem)
- Large: 6rem (was 8rem)
- Medium: 4rem (was 5rem)
- Small: 2.5rem (was 3rem)

**Tablet (max-width: 991px):**
- Large: 4.5rem
- Medium: 3rem
- Small: 2rem
- XMedium: 4rem

**Mobile (max-width: 767px):**
- Large: 3.5rem
- Medium: 2.5rem
- Small: 1.5rem
- XMedium: 3.5rem

### Component Spacing

**Cards:**
- Value cards: 1.5rem padding
- Capabilities: 2rem padding
- Testimonials: 2rem padding
- Pricing: 2.5rem padding
- Gap tussen elementen: 1.5-2rem

**Buttons:**
- Padding: 1rem vertical, 1.5rem horizontal
- Gap in button groups: 0.75rem (mobile: full-width stack)

**Content width:**
- Max container: 75rem (1200px, was 80rem/1280px)
- Hero subheading: 34rem (~65 characters)

---

## Border Radius

### Scale (responsive)

- **Round:** 100vw (volledig ronde pills)
- **8XL:** 8rem → 6rem tablet → 5rem mobiel
- **7XL:** 7.5rem → 5rem tablet → 4.5rem mobiel
- **6XL:** 6.5rem → 4.5rem tablet → 4rem mobiel
- **5XL:** 5rem → 4rem tablet → 3.5rem mobiel
- **4XL:** 3.5rem → 2.75rem tablet → 2.25rem mobiel
- **3XL:** 3rem → 2.5rem tablet → 2rem mobiel
- **2XL:** 2rem → 1.5rem tablet → 1.25rem mobiel
- **XL:** 1.75rem → 1.25rem tablet → 1rem mobiel
- **L:** 1.5rem → 1rem tablet → 0.75rem mobiel
- **M:** 1.125rem → 0.75rem tablet → 0.5rem mobiel
- **Default:** 1rem → 0.5rem tablet/mobiel

### Gebruik

- Buttons: Round (100vw)
- Large cards: 5XL-7XL
- Medium cards: 3XL-4XL
- Small cards: 2XL
- Inputs: M-L

---

## Buttons

### Primary Button (hologram gradient border)

**Structuur:**
- Outer: 2px gradient border met rounded pill
- Inner: Zwarte achtergrond (#000) met witte text
- Glow: Inner shadow voor depth

**States:**
- **Default:** Gradient ring zichtbaar
- **Hover:** translateY(-2px) + box-shadow 0 8px 24px rgba(0,0,0,0.15)
- **Active:** translateY(0)
- **Focus:** 2px solid #3A86FF outline, 2px offset

**Code:**
```css
.button {
  border-radius: var(--_radius---round);
  background-image: linear-gradient(270deg, ...hologram...);
  min-height: 3.75rem;
  color: white;
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

### Secondary Button

- Witte achtergrond met border
- Zwarte text
- Subtiele hover state (background darken)

### Ghost Button

- Transparant
- Text + icon only
- Border op hover

---

## Shadows

### Card Shadows

**Default:**
```css
box-shadow: inset 0 -2px 1px rgba(0,0,0,0.12), 
            inset 0 0 1px 2px #fff;
```

**Hover (elevated):**
```css
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
```

**Featured (pricing card):**
```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

### Glow Effects

**Inset glows (buttons, form inputs):**
```css
box-shadow: inset 0 0 12px #fff;
box-shadow: inset 0 0 40px rgba(255,255,255,0.4);
```

**Button inner shadow:**
```css
box-shadow: inset 0 0 32px rgba(255,255,255,0.5);
```

---

## Micro-interactions

### Timing

**Durations:**
- Fast: 150ms (icon rotations, simple state changes)
- Standard: 200ms (buttons, links, most interactions)
- Slow: 300ms (cards, complex animations)

**Easing:**
- Default: `ease` (smooth all-around)
- Enter: `ease-out` (fast start, slow end)
- Exit: `ease-in` (slow start, fast end)

### Button Hover

```css
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}
```

### Card Hover

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
}
```

### Link Hover

```css
.link:hover {
  text-decoration: underline;
  /* or */
  border-bottom: 1px solid currentColor;
}
```

### FAQ Accordion

```css
.faq-item-bottom {
  transition: height 0.3s ease, padding 0.3s ease;
}

.faq-icon {
  transition: transform 0.2s ease;
}

.faq-item.open .faq-icon {
  transform: rotate(45deg);
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Focus States

**All interactive elements:**
```css
*:focus-visible {
  outline: 2px solid #3A86FF;
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Toegankelijkheid:**
- Altijd zichtbaar bij keyboard navigatie
- Nooit `outline: none` zonder alternatief
- Minimaal 2px dik voor visibility
- High contrast kleur (#3A86FF blauw)

---

## Navigation

### Sticky Navbar

**Desktop:**
- Height: 64px (was 80px+)
- Top padding: 1rem (was 2rem)
- Background op scroll: rgba(255,255,255,0.8) + blur(12px) + border

**Mobile:**
- Same height
- Hamburger menu
- Full-width CTA button

**States:**
- Default: Transparant/blur
- Scrolled: Witte achtergrond (80% opacity) + border-bottom

---

## Footer

### CTA Form Section

**Achtergrond:**
```css
background-color: rgba(26, 26, 26, 0.95);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Form inputs:**
```css
background-color: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.2);
color: #ffffff;
```

**Contrast:**
- Labels: rgba(255,255,255,0.9) = ~15:1 ✅
- Placeholders: rgba(255,255,255,0.6) = ~5:1 ✅
- Links: rgba(255,255,255,0.85) = ~12:1 ✅

### Footer Spacing

- Top/bottom: var(--_spacing---xmedium) (5rem)
- No longer 100vh height
- Compact, scannable

---

## Responsive Breakpoints

```css
/* Mobile first approach */
@media (max-width: 479px)  { /* Mobile small */ }
@media (max-width: 767px)  { /* Mobile large */ }
@media (max-width: 991px)  { /* Tablet */ }
@media (min-width: 1280px) { /* Desktop large */ }
@media (min-width: 1920px) { /* Desktop XL */ }
```

**Basisregels:**
- Ontwerp mobile-first
- Test op 375px, 768px, 1440px minimaal
- Geen horizontale scroll
- Touch targets minimaal 44x44px
- Leesbare tekst zonder zoom

---

## Performance Best Practices

1. **Font loading:**
   - font-display: swap
   - Preload critical fonts

2. **Images:**
   - Lazy loading: `loading="lazy"`
   - Width & height attributes
   - Fade-in animatie bij load

3. **CSS:**
   - Critical CSS inline
   - Defer non-critical styles
   - CSS variables voor theming

4. **Animations:**
   - GPU acceleration: `will-change: transform`
   - Respect `prefers-reduced-motion`
   - Debounce scroll events

5. **JavaScript:**
   - Defer non-critical scripts
   - Passive event listeners
   - IntersectionObserver voor lazy loading

---

## Component Checklist

Bij het bouwen van nieuwe componenten:

- [ ] Volgt 8px spacing scale
- [ ] Gebruikt design tokens (CSS variables)
- [ ] Heeft hover state (200ms ease)
- [ ] Heeft focus-visible state
- [ ] Werkt op mobile (375px), tablet (768px), desktop (1440px)
- [ ] Tekst contrast ≥ 4.5:1 (body) of ≥ 3:1 (large)
- [ ] Respecteert prefers-reduced-motion
- [ ] Touch targets ≥ 44x44px
- [ ] Gebruikt lazy loading voor images
- [ ] Heeft semantische HTML

---

**Einde design system**
