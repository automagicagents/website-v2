# Design Refresh Analyse – Automagic Website v2

**Branch:** `cursor/design-refresh-5952`  
**Datum:** 6 oktober 2026

---

## Pagina-overzicht

De site bevat **één hoofdpagina** (marketing homepage):

### **Hoofdpagina: `/live`**
De volledige marketing site met 11 secties:
1. **Navigation** – Sticky header met logo, menu en CTA
2. **Hero** – "We make your Sales AI First" hoofdboodschap
3. **Logo Marquee** – Scrollende klanten-logos
4. **About** – Video en statistieken
5. **Values** – 3 waarden-cards
6. **Services/Capabilities** – Grid met diensten en data
7. **Process** – Verticale tijdlijn met stappen
8. **Case Studies** – Slider met projecten
9. **Integrations** – Cirkel met integraties
10. **Testimonials** – 3 klantquotes
11. **Pricing** – 2 prijsplannen
12. **Team** – Team member slider
13. **FAQ** – Uitklapbare vragen
14. **Footer** – CTA form + navigatie

*Notitie: Root `/` toont tijdelijk een coming-soon placeholder. Utility pages (/changelog, /style-guide, /license, /instructions, /401) zijn Webflow template voorbeelden, geen onderdeel van de marketing site.*

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
  - Title XL: 3rem, Title L: 2rem, Title M: 1.5rem, Title S: 1.25rem
  - Body L: 1.125rem, Body M: 1rem, Body S: 0.875rem, Body XS: 0.75rem
- **Line heights:** 1em (tight), 1.1em, 1.2em, 1.375em (default body)
- **Letter spacing:** -0.06em (grote headings), -0.05em (medium), -0.03em (body)

### Kleuren

**Brand gradient (hologram):**
- Gebruikt color-mix met basis kleuren #3A86FF (blauw), #8338EC (paars), #FF006E (roze), #FB5607 (oranje), #FFBE0B (geel)
- Alle op 50% opacity mixed met wit

**Neutral palette:**
- White: #ffffff
- Grey 01-08: #1a1a1a → #f2f2f2 (8 tinten)
- Black: #000000
- Transparante varianten voor overlays

### Spacing
- Small: 3rem → 2rem mobiel
- Medium: 5rem → 4rem tablet → 3rem mobiel  
- Large: 8rem → 6rem tablet → 4rem mobiel
- XMedium: 6.25rem → 5rem tablet → 3.5rem mobiel

### Border radius
- Round: 100vw (volledig rond)
- 8XL tot Default: 8rem → 0.5rem (13 stappen, alle responsive)

### Buttons
- **Primary:** Hologram gradient border (2px) met zwarte fill, pill shape, inset glow
- **Secondary:** Witte achtergrond, border, subtle hover
- **Ghost:** Transparant met icon

### Shadows
- Inset glows: `inset 0 0 12px #fff`, `inset 0 0 40px #fff`
- Card depth: `inset 0 -2px 1px rgba(0,0,0,0.12), inset 0 0 1px 2px #fff`

---

## Homepage analyse (`/live`)

**Screenshot referenties:**
- Full page desktop: `/opt/cursor/artifacts/before/live-desktop.png`
- Full page mobiel: `/opt/cursor/artifacts/before/live-mobile.png`
- Per sectie: `/opt/cursor/artifacts/before/live-[sectie]-desktop.png`

### **Top 5 grootste zwaktes (overall)**

1. **Performance – LCP 4.8s en TBT 1230ms:** De site is traag. Lighthouse performance score is slechts 51/100. Largest Contentful Paint duurt bijna 5 seconden, Total Blocking Time is 1.2 seconde. Dit voelt niet premium.

2. **Whitespace – Excessive vertical spacing creëert leegte:** Veel secties hebben 8rem (128px) padding tussen elkaar op desktop. De pagina voelt uitgerekt en leeg, vooral op grote schermen. Geen tight, premium gevoel.

3. **Visual hierarchy – Alles heeft dezelfde visuele weight:** Alle section headings gebruiken dezelfde size (h2), alle cards hebben dezelfde treatment, alle buttons zien er hetzelfde uit. Geen duidelijke prioriteit of flow.

4. **Color – Overdadig gebruik van grijze gradients:** Bijna elke sectie heeft een licht-naar-donker grijze gradient als achtergrond. Het voelt repetitief en dated. Mist kleur, energie en moderniteit.

5. **Typography – Line length en contrast issues:** Body text loopt te breed (>80 karakters), negatieve letter-spacing (-0.06em op headings) maakt lange teksten moeilijk leesbaar, en witte tekst op grijze gradients heeft te weinig contrast.

---

### **Per sectie analyse**

#### 1. **Navigation**
*Screenshot: `/opt/cursor/artifacts/before/live-nav-desktop.png`*

**Zwaktes:**

1. **Layout – Floating nav met blur voelt amateuristisch:** De navbar floats met backdrop-blur en grey transparent achtergrond. Bij scroll over lichte secties valt het weg. Geen solid foundation.

2. **Button – "Ontvang deze template" CTA is misleading:** Dit is een Webflow template CTA die naar een externe template shop linkt. Voor een echte marketing site is dit onprofessioneel en verwarrend.

3. **Whitespace – Te veel verticale ruimte rondom nav:** De navbar neemt 80px + 32px padding (totaal >110px) in. Voor een sticky nav is dit veel, vooral op mobiel waar elke pixel telt.

#### 2. **Hero Section**
*Screenshot: `/opt/cursor/artifacts/before/live-hero-desktop.png`*

**Zwaktes:**

1. **Typography – Gradient text effect is barely readable:** De hoofdtekst "We make your Sales AI First" gebruikt een light hologram gradient op donkere achtergrond. De kleuren zijn zo licht dat contrast laag is (<3:1 ratio), vooral "your" in roze.

2. **Layout – Centered layout voelt statisch en voorspelbaar:** Alles is perfect gecentreerd: eyebrow, heading, subheading, buttons. Geen asymmetrie, geen visuele spanning. Voelt template-achtig.

3. **Background – Abstract shape is te groot en domineert:** De zwarte blob-vorm neemt 60% van de hero in beslag maar voegt geen betekenis toe. Het verdringt de boodschap in plaats van deze te ondersteunen.

#### 3. **Logo Marquee**
*Onderdeel van hero section*

**Zwaktes:**

1. **Color – Logo's zijn volledig desaturated (grijs):** Alle klanten-logos zijn omgezet naar grijs. Dit mist impact en herkenbaarheid. Echte logo's in kleur zouden meer vertrouwen wekken.

2. **Spacing – Te veel ruimte tussen logo's (5rem = 80px):** De gap maakt de marquee langzaam en leeg aanvoelen. Logo's komen te traag voorbij.

#### 4. **About Section**
*Screenshot: `/opt/cursor/artifacts/before/live-about-desktop.png`*

**Zwaktes:**

1. **Layout – Video is te klein en verloren in whitespace:** De about video is slechts 600px breed (37.5rem) in een 1280px container. Enorme witte ruimte eromheen. De video verdrinkt.

2. **Animations – Content is hidden on load:** Veel about content heeft `visibility: hidden` totdat JS animaties laden. Als JS faalt of traag is, zie je niks. Bad progressive enhancement.

3. **Typography – Stats marquee is te klein en licht:** De scrollende statistieken ("400% ROI", "60% tijd bespaard") zijn in 7rem font size maar in lichtgrijs (#a6a6a6). Te zwak voor zo'n belangrijke metric.

#### 5. **Values Section**
*Screenshot: `/opt/cursor/artifacts/before/live-values-desktop.png`*

**Zwaktes:**

1. **Visual hierarchy – Alle 3 cards hebben gelijke weight:** Geen primary card. Alle drie cards zijn exact hetzelfde: size, color, layout. Geen focus, geen prioriteit.

2. **Whitespace – Te veel padding binnen cards (2.5rem = 40px):** De cards hebben 40px padding aan alle kanten, waardoor de content klein en verloren lijkt in de grote border-radius (7.5rem) container.

3. **Icons – Generic glassmorphic treatment voelt overused:** De icon frames gebruiken blur, meerdere lagen, en overdreven glows. Het effect voelt 2021, niet 2026.

#### 6. **Services/Capabilities Section**
*Screenshot: `/opt/cursor/artifacts/before/live-services-desktop.png`*

**Zwaktes:**

1. **Layout – Grid breakpoints zijn awkward:** Op desktop is het een 3-column grid met één breed card links. De asymmetrie voelt per ongeluk, niet ontworpen. Bij 1440px zijn cards te smal of te breed.

2. **Typography – Card content is te klein (14px body-s):** De capability descriptions gebruiken 0.875rem (14px) text met -0.03em letter-spacing. Op cards die 200px+ breed zijn, is dit te klein en maakt het cheap.

3. **Color – Data badges zijn te busy:** De 4 data visualisatie cards hebben donkergrijze achtergronden (#525252) met witte accents en icons. Te veel contrast, te veel visual noise.

#### 7. **Process Section**
*Screenshot: `/opt/cursor/artifacts/before/live-process-desktop.png`*

**Zwaktes:**

1. **Layout – Vertical timeline is te breed en repetitief:** Elke process step is een full-width block met left-center-right grid. Bij 5+ steps voelt het eindeloos en saai.

2. **Whitespace – Inconsistente spacing tussen steps:** Sommige steps hebben 0.5rem gap, andere hebben meerdere rems door de line-hide divs. Geen ritme.

3. **Micro-interactions – Animated line is barely visible:** De gradient progress line is 4px breed en beweegt traag. Op grote schermen is het bijna onzichtbaar. Mist impact.

#### 8. **Case Studies Section**
*Screenshot: `/opt/cursor/artifacts/before/live-casestudies-desktop.png`*

**Zwaktes:**

1. **Layout – Slider padding is te groot (5rem links + rechts):** De case study cards hebben 80px padding aan weerszijden voor nav buttons. Dit maakt cards klein en maakt swipen awkward.

2. **Mobile – Stacked layout loses image impact:** Op mobiel stapelen de image en content verticaal, waardoor de 3:2 image ratio verloren gaat. Cards worden 2x zo lang en scrollen wordt vermoeiend.

3. **Typography – Stats numbers zijn te groot zonder context:** "87%" in 2rem font zonder directe label erboven. Je moet zoeken naar wat het betekent.

#### 9. **Integrations Section**
*Screenshot: `/opt/cursor/artifacts/before/live-integrations-desktop.png`*

**Zwaktes:**

1. **Layout – Circle layout is gimmicky en onpraktisch:** De integratie-iconen staan in een cirkel rond een centrale "Automagic" badge. Het ziet er speels uit maar is moeilijk te scannen. Geen logical order.

2. **Animations – Marquee rows zijn too fast:** De integration tiles scrollen in horizontale rijen maar de snelheid is te hoog. Je kunt logo's niet lezen voor ze verdwijnen.

3. **Visual hierarchy – Central badge competeert met content:** Het grote centrale "Automagic" circular badge trekt meer aandacht dan de daadwerkelijke integraties.

#### 10. **Testimonials Section**
*Screenshot: `/opt/cursor/artifacts/before/live-testimonials-desktop.png`*

**Zwaktes:**

1. **Layout – 3-column grid maakt testimonials te smal:** Op 1440px zijn testimonial cards slechts ~400px breed. De quote text loopt 4-5 regels en voelt gecrammed.

2. **Typography – Quote text is te klein (18px):** Body-l (1.125rem) is te klein voor testimonials die de main content zijn. Zou 20-24px moeten zijn voor leesbaarheid en importance.

3. **Color – Video testimonial card gets lost:** Eén testimonial is een video tegen donkere achtergrond, twee zijn tekst tegen lichte achtergrond. Het dark card verdrinkt visueel tussen de light cards.

#### 11. **Pricing Section**
*Screenshot: `/opt/cursor/artifacts/before/live-pricing-desktop.png`*

**Zwaktes:**

1. **Layout – Tabs are tiny and easy to miss:** De "Maandelijks/Jaarlijks" tab selector is klein (14px) en lichtgrijs. Het ziet eruit als disabled state, niet als een active control.

2. **Visual hierarchy – Both plans look equally important:** De twee pricing cards (Starter vs Enterprise) hebben bijna identieke styling. Geen "recommended" badge, geen visual accent op de target plan.

3. **Typography – Feature lists zijn te dicht op elkaar:** Checkmarks en feature text hebben 0.25rem gap maar regels hebben ook 0.25rem margin-bottom. Alles loopt in elkaar, moeilijk te scannen.

#### 12. **Team Section**
*Screenshot: `/opt/cursor/artifacts/before/live-team-desktop.png`*

**Zwaktes:**

1. **Layout – Slider shows only 30% width per slide:** Team cards zijn 1:1.3 aspect ratio maar de slider mask is slechts 30% breed. Je ziet fractie van een card, moet constant swipen. Frustrerend.

2. **Micro-interactions – Image hover state is invisible:** Team photos hebben een subtle inner-shadow hover maar het is zo subtiel dat je het niet ziet. Geen feedback.

#### 13. **FAQ Section**
*Screenshot: `/opt/cursor/artifacts/before/live-faq-desktop.png`*

**Zwaktes:**

1. **Layout – Accordion items hebben te veel decoratie:** Elke FAQ heeft een 2px transparent border met gradient background, rounded corners, number badge, icon button. Te busy.

2. **Whitespace – Collapsed items zijn te groot:** Een collapsed FAQ neemt 80px+ hoogte in (padding + icon + number). Met 8+ FAQs wordt dit een lange scroll zonder content.

3. **Typography – Answer text is hidden too deep:** Je moet klikken om antwoorden te zien, maar de collapsed state geeft geen preview. Voelt als extra werk.

#### 14. **Footer & CTA Form**
*Screenshot: `/opt/cursor/artifacts/before/live-footer-desktop.png`*

**Zwaktes:**

1. **Layout – Form is buried at bottom of 100vh section:** De CTA form zit in een fullscreen footer. Je moet scrollen voorbij social links en nav om het te vinden. Te laat.

2. **Color – Dark gradient makes form hard to read:** Het form zit op een donkergrijze-naar-zwart gradient. Inputs zijn dark met low contrast borders. Moeilijk te zien wat je typt.

3. **Typography – Footer links zijn te licht (#fff op 20% opacity):** Social media links en footer nav zijn witte text op 20% opacity (#ffffff33). Contrast ratio is <2:1. Onleesbaar.

---

## Performance & Readability

### **Lighthouse audit (localhost:3000/live)**

**Performance: 51/100** ❌
- First Contentful Paint: 2.2s (geel)
- Largest Contentful Paint: 4.8s (rood)
- Total Blocking Time: 1230ms (rood)
- Cumulative Layout Shift: 0.002 (groen)
- Speed Index: 5.6s (rood)

**Accessibility: 93/100** ✅

**Render-blocking resources:** 5 (CSS files)
**Image optimization:** Goed (alle images geoptimaliseerd)
**Text compression:** Goed (gzip enabled)
**Offscreen images:** 34KB could be lazy-loaded later

### **Image analyse**
- **Totaal aantal images:** 128 in index.html
- **Lazy loading:** ✅ Alle images hebben `loading="lazy"`
- **Moderne formaten:** ❌ Alleen PNG, geen WebP/AVIF
- **Responsive images:** ❌ Geen srcset of picture elements
- **File sizes:** Gemengd (1KB icons tot 260KB case study images)

**Grootste images:**
- caseimg1-p-800.png: 260KB
- case3.png: 228KB  
- testimonial-avt-5.png: 193KB
- team-1-p-500.png: 168KB

### **Readability issues**

**Contrast problemen:**
- Hero gradient text op dark background: <3:1 in roze/oranje sections
- Footer social links (#fff op 20% opacity): <2:1
- Stats marquee lichtgrijs (#a6a6a6): ~3.2:1 (minimaal)
- Placeholder text in dark forms: <3:1

**Line length:**
- Body text in cards: 60-70 karakters ✅ (goed)
- Hero subheading: ~85 karakters ⚠️ (te lang)
- Testimonials in smalle kolommen: 40 karakters ⚠️ (te kort)

**Font sizes:**
- Desktop body: 16px ✅ (acceptabel)
- Mobile body: 16px ✅ (acceptabel)  
- Feature lists: 14px ⚠️ (te klein voor long-form)
- Footer text: 14px @ <2:1 contrast ❌ (onleesbaar)

**Letter spacing:**
- Body: -0.03em ⚠️ (tight, kan strain veroorzaken bij lange tekst)
- Headings: -0.06em ⚠️ (zeer tight, beïnvloedt readability)

---

## Samenvatting

De homepage heeft een solide design system foundation maar de implementatie mist refinement en premium polish. Belangrijkste problemen:

### **Grootste issues:**

1. **Slechte performance** – LCP 4.8s, TBT 1.2s. Site voelt traag en zwaar.
2. **Excessive whitespace** – Veel lege ruimte door overdreven spacing (8rem vertical padding).
3. **Weak hierarchy** – Alles heeft dezelfde visuele weight, geen clear prioriteit.
4. **Repetitieve gradients** – Grijs-naar-donker backgrounds in bijna elke sectie.
5. **Contrast issues** – Te licht gekleurde text op gradients, vooral in footer.

### **Sterke punten:**

- Funnel Display typography is modern en onderscheidend
- Hologram gradient concept is uniek en herkenbaar
- Lazy loading is correct geïmplementeerd op alle images
- Rounded pill button style is friendly en contemporary
- CSS variable system is maintainable en consistent
- Layout shift (CLS 0.002) is excellent

### **Actiepunten voor redesign:**

1. **Performance:** Reduce render-blocking CSS, optimize LCP element, reduce JS blocking
2. **Spacing:** Tighten vertical rhythm, gebruik 3-4rem in plaats van 8rem tussen secties
3. **Hierarchy:** Differentiate section treatments, add focal points, vary card styles
4. **Color:** Reduce gradient overuse, add more white/clean sections, improve contrast
5. **Typography:** Increase line-height, reduce negative letter-spacing, fix contrast ratios
6. **Layout:** Make asymmetric layouts intentional, reduce excessive centering
7. **Mobile:** Optimize touch targets, improve form placement, fix testimonial widths

---

**Volgende stap:** Redesign voorstel maken met concrete verbeteringen die de design tokens respecteren maar de implementatie verfijnen voor een tighter, modern, premium gevoel.
