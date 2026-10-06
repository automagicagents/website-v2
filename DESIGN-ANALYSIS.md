# Design Refresh Analyse – Automagic Website v2

**Branch:** `cursor/design-refresh-5952` (aangemaakt en gepusht naar remote)

**Datum:** 6 oktober 2026

---

## Pagina-overzicht

De site bevat 7 pagina's (alle momenteel live):

1. **/** (home) – Toont momenteel "SOON - We werken aan een nieuwe website"
2. **/changelog** – Versiegeschiedenis (v2.0, v1.0)
3. **/style-guide** – Typografie, kleuren en button voorbeelden
4. **/license** – Licentie-informatie voor fonts, images, videos, icons
5. **/instructions** – Webflow preloader instructies
6. **/401** – Unauthorized error page
7. **/coming-soon** – Coming soon placeholder

---

## Huidige design tokens

### Typografie
- **Font family:** Funnel Display (Google Fonts), fallback Arial, sans-serif
- **Font weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Font sizes:**
  - H1: 5rem (80px) → 4rem tablet → 3rem mobiel
  - H2: 4.5rem (72px) → 3rem tablet → 2.5rem mobiel
  - H3: 4rem (64px) → 2.5rem tablet → 2rem mobiel
  - H4: 3.5rem (56px) → 2rem tablet → 1.75rem mobiel
  - H5: 3rem (48px) → 1.75rem tablet → 1.5rem mobiel
  - H6: 2rem (32px) → 1.5rem tablet → 1rem mobiel
  - Title XL: 3rem (48px)
  - Title L: 2rem (32px)
  - Title M: 1.5rem (24px)
  - Title S: 1.25rem (20px)
  - Body L: 1.125rem (18px)
  - Body M: 1rem (16px)
  - Body S: 0.875rem (14px)
  - Body XS: 0.75rem (12px)
- **Line heights:** 1em (tight), 1.1em, 1.2em, 1.375em (default body)
- **Letter spacing:** -0.06em (large headings), -0.05em (medium), -0.03em (body)

### Kleuren

**Brand gradient (hologram):**
- Hologram 0%: color-mix(in srgb, #3A86FF 50%, #fff)
- Hologram 25%: color-mix(in srgb, #8338EC 50%, #fff)
- Hologram 50%: color-mix(in srgb, #FF006E 50%, #fff)
- Hologram 75%: color-mix(in srgb, #FB5607 50%, #fff)
- Hologram 100%: color-mix(in srgb, #FFBE0B 50%, #fff)

**Neutral kleuren:**
- White 01: #ffffff
- Grey 01 (text): #1a1a1a
- Grey 02: #292929
- Grey 03: #525252
- Grey 04: #a6a6a6
- Grey 05: #b8b8b8
- Grey 06: #cdcdcd
- Grey 07: #e6e6e6
- Grey 08 (backgrounds): #f2f2f2
- Black 01: #000000

**Transparante varianten:**
- White 02-07: rgba wit met alpha 0.8, 0.6, 0.4, 0.2, 0.1, 0.05
- Black 02-07: rgba zwart met alpha 0.8, 0.6, 0.4, 0.2, 0.1, 0.05

### Spacing
- Small: 3rem (48px) → 2rem mobiel
- Medium: 5rem (80px) → 4rem tablet → 3rem mobiel
- Large: 8rem (128px) → 6rem tablet → 4rem mobiel
- XMedium: 6.25rem (100px) → 5rem tablet → 3.5rem mobiel

### Border radius
- Round: 100vw (volledig rond)
- 8XL: 8rem → 6rem tablet → 5rem mobiel
- 7XL: 7.5rem → 5rem tablet → 4.5rem mobiel
- 6XL: 6.5rem → 4.5rem tablet → 4rem mobiel
- 5XL: 5rem → 4rem tablet → 3.5rem mobiel
- 4XL: 3.5rem → 2.75rem tablet → 2.25rem mobiel
- 3XL: 3rem → 2.5rem tablet → 2rem mobiel
- 2XL: 2rem → 1.5rem tablet → 1.25rem mobiel
- XL: 1.75rem → 1.25rem tablet → 1rem mobiel
- L: 1.5rem → 1rem tablet → 0.75rem mobiel
- M: 1.125rem → 0.75rem tablet → 0.5rem mobiel
- Default: 1rem → 0.5rem tablet/mobiel

### Buttons
- **Primair:** Zwarte achtergrond met hologram gradient border (2px), rounded pill shape, inner shadow
- **Secundair:** Witte achtergrond met border, transparante hover state
- **Ghost:** Geen achtergrond, alleen tekst met icon

### Box shadows
- Inset glows: `inset 0 0 12px #fff`, `inset 0 0 40px #fff`
- Card shadows: `inset 0 -2px 1px #0000001f, inset 0 0 1px 2px #fff`

---

## Analyse per pagina (5 grootste zwaktes)

### 1. Home (/) – Coming Soon Page

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/home-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/home-mobile.png`

**Zwaktes:**

1. **Layout – Minimale content, wasted space:** De hele pagina toont enkel "SOON" text en één regel tekst. Geen enkele waarde voor bezoekers. Zonde van premium domeinnaam en traffic.

2. **Typografie – "SOON" tekst mist visuele kracht:** Het grote "SOON" woord gebruikt een flauw grijs gradient maar heeft geen depth, contrast of premium gevoel. Voelt vlak en oninteressant.

3. **Color – Achtergrond is saaie grijze gradient:** De donkere gradient van grijs naar zwart voelt gedateerd en web-2.0-achtig. Mist moderniteit en energie.

4. **Button/CTA – Hologram brand pill ziet er goedkoop uit:** De zwarte pill met kleurrijke gradient ring voelt amateuristisch. Te veel visueel gewicht voor zo'n klein element.

5. **Whitespace – Geen verticale ritme of structuur:** Alles staat gewoon in het midden van de viewport. Geen sectie-indeling, geen visuele ademruimte. Voelt haastig in elkaar gezet.

---

### 2. Changelog (/changelog)

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/changelog-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/changelog-mobile.png`

**Zwaktes:**

1. **Layout – Massive empty space onder content:** Op desktop is er een enorm wit/grijs gebied onder de changelog items. De content neemt slechts 30% van de viewport in beslag.

2. **Typografie – Inconsistent heading hierarchy:** "Changelog" heading is gigantisch, maar de version numbers (v2.0, v1.0) zijn kleiner dan verwacht voor main sections. Leesbaarheid lijd hieronder.

3. **Whitespace – Te veel ruimte tussen sections, te weinig binnen:** De ruimte tussen v2.0 en v1.0 is excessief, maar de bullet points binnen elke versie voelen gecrammed. Slechte balans.

4. **Visual hierarchy – Footer gradient domineert de page:** De donkere gradient aan de onderkant trekt meer aandacht dan de actual content. De footer social icons zijn bijna onzichtbaar tegen de donkere achtergrond.

5. **Mobile – CTA form popup is te groot:** Op mobiel neemt het "Your Competitors Are Automating" formulier de helft van de viewport in beslag, waardoor de changelog content onleesbaar wordt zonder te scrollen.

---

### 3. Style Guide (/style-guide)

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/style-guide-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/style-guide-mobile.png`

**Zwaktes:**

1. **Layout – Geen echte grid structure:** Alles staat in één verticale kolom op een lichtgrijze achtergrond. Voelt meer als een dump van elementen dan een curated style guide.

2. **Color – Gradient color samples zijn onduidelijk:** De hologram gradient toont percentages (0%, 25%, 50%, 75%, 100%) maar de kleuren zijn zo licht dat het moeilijk is om verschil te zien. Lage bruikbaarheid.

3. **Typography – Font samples hebben geen context:** "Heading1, Heading2" etc. worden getoond maar niet in een echte use case. Moeilijk om schaal en impact te beoordelen.

4. **Visual hierarchy – Alles heeft gelijke visuele weight:** Typography section, Color section, Button section hebben allemaal dezelfde treatment. Geen clear focal points.

5. **Buttons – Slechts 3 button variants getoond:** Er zijn veel button states in de CSS maar de style guide toont er maar 3. Inconsistentie tussen code en design.

---

### 4. License (/license)

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/license-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/license-mobile.png`

**Zwaktes:**

1. **Typography – Line length te lang op desktop:** De body text strekt zich uit tot 500px breed, wat moeilijk leesbaar is. Ideale line length is 50-75 karakters, dit is veel breder.

2. **Whitespace – Te veel vertical spacing rond intro text:** De intro paragraph heeft enorme margins boven en onder, waardoor de eigenlijke licentie items ver weg voelen.

3. **Visual hierarchy – Alle sections lijken even belangrijk:** "Fonts", "Images", "Videos", "Icons" hebben allemaal dezelfde font size en weight. Geen differentiatie in prioriteit.

4. **Layout – Two-column layout op desktop voelt geforceerd:** De label (Fonts, Images) in de linker kolom en content rechts creëert awkward whitespace. Zou beter werken als full-width blocks.

5. **Mobile – Footer gradient is te agressief:** De donkere gradient aan de onderkant start te hoog en verduistert de laatste sections van content. Contrast issues.

---

### 5. Instructions (/instructions)

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/instructions-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/instructions-mobile.png`

**Zwaktes:**

1. **Typography – Body text is te klein voor instructies:** Instructies gebruiken de default body size (16px) maar voor technical steps zou 18px beter zijn voor leesbaarheid.

2. **Layout – Geen visuele breaks tussen steps:** "Edit Preloader", "After Editing", "Important" sections lopen in elkaar over. Numbered steps of visuele dividers zouden helpen.

3. **Whitespace – Inconsistent spacing tussen list items:** Sommige bullet points hebben 0.25rem margin-bottom, andere niet. Inconsistent verticaal ritme.

4. **Visual hierarchy – Section headings zijn niet bold genoeg:** "Preloader", "After Editing", "Important" gebruiken medium weight maar zouden semibold moeten zijn voor duidelijkheid.

5. **Mobile – CTA form overlay is invasive:** Net als op changelog, blokkeert het contact form op mobiel de content en is moeilijk te dismissen. Bad UX.

---

### 6. 401 (/401)

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/401-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/401-mobile.png`

**Zwaktes:**

1. **Layout – Alleen een coming soon placeholder:** Deze pagina toont dezelfde "SOON" content als de homepage. Geen daadwerkelijke 401 error messaging.

2. **Typography – Geen instructies voor de gebruiker:** Een 401 pagina zou moeten uitleggen wat er mis ging en wat de gebruiker kan doen. Nu is het alleen decoratie.

3. **Color – Identiek aan home page:** Dezelfde grijze gradient achtergrond. Geen differentiatie tussen verschillende page types.

4. **Button/CTA – Automagic logo pill heeft geen functie:** De zwarte pill met logo is niet klikbaar en heeft geen duidelijk doel.

5. **Whitespace – Zelfde probleem als home:** Alles centered, geen structuur, geen ademruimte rond elementen.

---

### 7. Coming Soon (/coming-soon)

**Screenshot referenties:**
- Desktop: `/opt/cursor/artifacts/before/coming-soon-desktop.png`
- Mobiel: `/opt/cursor/artifacts/before/coming-soon-mobile.png`

**Zwaktes:**

1. **Layout – Exacte duplicate van home en 401:** Dit is letterlijk dezelfde page als / en /401. Geen unieke content.

2. **Typografie – "SOON" gradient effect is barely visible:** Het gradient effect op het woord "SOON" is zo subtiel dat het bijna niet opvalt. Mist impact.

3. **Color – Boring grey-to-black gradient:** Herhaling van het zelfde probleem. Deze achtergrond voelt saai en outdated.

4. **Visual hierarchy – Geen hierarchy:** Er is maar één heading en één subheading. Geen layers van informatie.

5. **Micro-interactions – Geen animations of beweging:** De pagina is volledig statisch. Geen hover states, geen subtle beweging. Voelt lifeless.

---

## Performance & readability quick facts

### Performance opmerkingen:
- **Large CSS file:** automagic-v2.webflow.css is 4460 regels. Veel unused CSS voor een site met slechts 7 simpele pagina's.
- **Google Fonts preconnect:** Correct geïmplementeerd met preconnect hints.
- **Geen lazy loading:** Images en video's hebben geen lazy loading attributen.
- **Webflow artifacts:** Veel `.w-variant-*` classes en inline styles die de CSS opblazen.
- **No image optimization info:** Geen moderne formaten (WebP, AVIF) of responsive images te zien in HTML.

### Readability opmerkingen:
- **Line length:** Te lang op license en instructions pages (>80 karakters per regel).
- **Contrast:** Footer social icons (wit op donkere gradient) hebben waarschijnlijk lage contrast ratio (<4.5:1).
- **Font sizes:** Body text is 16px, wat acceptabel is, maar geen responsive typography (geen fluid scaling).
- **Letter spacing:** Negatieve letter-spacing (-0.03em op body, tot -0.06em op headings) kan leesbaarheid verminderen bij lange passages.

---

## Samenvatting

De site gebruikt een solide design system met goede tokens (spacing, typography scale, radius scale) maar de implementatie mist verfijning:

**Grootste problemen:**
1. **Lege pages:** Home, 401, en coming-soon zijn placeholders zonder waarde
2. **Excessive whitespace:** Footer gradients en large spacing creëren lege gebieden
3. **Weak hierarchy:** Alles heeft hetzelfde visuele gewicht
4. **Generic gradients:** Grey-to-black achtergronden voelen dated
5. **Mobile CTA overlay:** Invasive formulier blokkeert content

**Sterke punten om te behouden:**
- Funnel Display font choice (modern, variable)
- Hologram gradient concept (onderscheidend)
- Rounded pill buttons (friendly, modern)
- CSS variable system (maintainable)
- Spacing scale (consistent)

**Next steps:**
Een redesign voorstel maken dat deze tokens gebruikt maar met:
- Beter contrast en hierarchy
- Modernere color treatments
- Functionele homepage content
- Mobile-first approach voor CTAs
- Tighter layouts met betere balance
