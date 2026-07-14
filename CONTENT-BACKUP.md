# Content Backup — Automagic Website

> **Doel:** Back-up van alle copy (teksten) op de website, met de exacte locatie (bestand + sectie + regelnummer) waar elke tekst nu staat.
> **Gemaakt op:** 2026-07-14
> **Bron:** Webflow-export (branch `aanpassingen`)

Alle regelnummers verwijzen naar de stand op het moment van deze back-up. Na wijzigingen kunnen ze verschuiven — gebruik ze als startpunt, niet als absolute waarheid.

## Pagina's in dit project

| Bestand | Pagina | Bevat |
|---|---|---|
| [index.html](index.html) | Homepage | Alle hoofdsecties (hero t/m FAQ + CTA-formulier) |
| [404.html](404.html) | 404 Not Found | Foutmelding |
| [401.html](401.html) | Beveiligde pagina | Wachtwoordprompt |
| [changelog.html](changelog.html) | Changelog | Versiegeschiedenis |
| [instructions.html](instructions.html) | Instructions | Uitleg preloader (template-handleiding) |
| [license.html](license.html) | License | Licentie-info assets |
| [style-guide.html](style-guide.html) | Style Guide | Webflow-typografie demo (geen echte copy) |

Terugkerende onderdelen (navbar, CTA-formulier, footer) staan op meerdere pagina's. Ze zijn hieronder één keer volledig uitgeschreven onder **Gedeelde onderdelen**.

---

# 1. Homepage — `index.html`

## Preloader — regel ~188
```
Automagic
```

## Navbar — regel ~193
Menu-knop: `Menu`
Template-knop: `Get this Template`

Navigatielinks:
`About` · `Values` · `Services` · `Process` · `Projects` · `Integrations` · `Testimonials` · `Pricing` · `Team` · `FAQs`

## Hero — sectie `.section hero` — regel ~235
- **Eyebrow:** Automagic AI Partner
- **H1:** Intelligent Automation `<br>` for Modern Teams
- **Subheading:** We build AI-powered automation systems that eliminate manual work, reduce costs, and multiply your business performance.
- **Knop 1:** Get this Template
- **Knop 2:** Work with Us
- **Logo-marquee** (regel ~307): alleen logo-afbeeldingen, geen tekst.

## About — sectie `#about-section` — regel ~320
- **Eyebrow:** `001` — who we are
- **About-tekst:** We helps startups, SMEs & enterprises design and deploy intelligent automation systems that streamline operations and unlock scalable growth.
- **Statistieken (marquee):**
  - `500+` — saved hours
  - `80%` — productivity boost
  - `5x` — faster response

## Values — sectie `#values-section` — regel ~403
- **Eyebrow:** `002` — values
- **H2:** Why Choose Us?
- **Subheading:** We build AI-powered automation systems that eliminate manual work, reduce costs, and multiply your business performance.
- **Kaart 01 — Business-First AI Strategy:** We design solutions aligned with your revenue goals.
- **Kaart 02 — End-to-End Implementation:** From strategy to development, followed by deployment.
- **Kaart 03 — Custom-Built Automation:** No templates. Every workflow is tailored to your unique operations.

## Services / Capabilities — sectie `#service-section` — regel ~495
- **Eyebrow:** `003` — Capabilities
- **H2:** Our AI-Driven Services
- **Kaart 1 — AI Workflow Automation.** Automate repetitive tasks across departments using intelligent triggers and decision logic.
  - Workflow mapping
  - Real-time system integration.
  - Validated output
- **Kaart 2 — AI Chatbots & Conversational Agents.** 24/7 customer support, lead qualification, booking systems, and AI sales reps.
- **Kaart 3 — AI Data & Reporting Systems.** Automated dashboards, business intelligence, performance forecasting.
- **Kaart 4 — CRM & Sales Automation.** Pipeline automation, AI lead scoring, follow-ups, predictive insights.
- **Kaart 5 — Marketing Automation.** Email sequences, personalization engines, AI-generated content systems.
- **Mini-CTA-blok:**
  - Titel: Not sure what to automate first?
  - Tekst: Book a free 30-minute AI strategy session. We'll analyze your current workflows and identify the highest-ROI automation opportunities for your business.
  - Knop: Schedule a Session
- **Data-security-blok — Your Data. Protected. Always.**
  - End-to-End Encryption
  - Secure API Integrations
  - Role-Based Access Control
  - Data Minimization

## Process — sectie `#process-section` — regel ~629
- **Eyebrow:** `004` — process
- **H2:** How We Work
- **Subheading:** A proven process designed to transform complex workflows into scalable AI-powered systems — efficiently and strategically.
- **01 — Discovery & Audit:** We analyze your workflows, bottlenecks, and revenue opportunities.
- **02 — Automation Blueprint:** We design a detailed automation architecture aligned with KPIs.
- **03 — Build & Integration:** Our engineers implement AI systems and integrate with your existing tools.
- **04 — Testing & Optimization:** Performance testing, data validation, refinement.
- **05 — Deployment & Scaling:** Launch, monitor, and continuously optimize for growth.

## Projects / Case studies — sectie `#project-section` — regel ~785
- **Eyebrow:** `005` — Case studies
- **H2:** What We've Built
- **Case 1 — AI Workflow Automation for SaaS Company**
  - Desc: We analyze your workflows, bottlenecks, and revenue opportunities.
  - Knop: Read More
  - Cijfers: `+40%` Demo Booking · `+25%` Closing Rate · `3x` Engagement
- **Case 2 — AI Project Management Automation for Creative Teams**
  - Desc: Streamlining project coordination and task assignments for faster delivery and smoother collaboration.
  - Knop: Read More
  - Cijfers: `+38%` Faster Delivery · `-62%` Admin Work · `4x` Productivity
- **Case 3 — AI Property Inquiry Chatbot for Real Estate Firms**
  - Desc: An intelligent chatbot that qualifies property inquiries, answers buyer questions, and schedules property viewings automatically.
  - Knop: Read More
  - Cijfers: `3x` Lead Response · `+40%` Viewing Bookings · `24/7` Engagement

## Integrations — sectie `#integrations-section` — regel ~1000
- **Eyebrow:** `006` — integrations
- **H2:** Technology Ecosystem
- **Label:** Try with Automagic
- **Integratie-tegels** (marquee, herhaald):
  HubSpot · Salesforce · Zoho · Mailchimp · ActiveCampaign · Zapier · OpenAI · Cloud AI · Make · Custom APIs · Pipedrive · Monday · Copper · Close · Klaviyo · Marketo · Brevo · ConvertKit · N8N · Customerio · Pabbly · Workato · Anthropic · Vertex · Azure · Hugging · Intercom · Drift · Crisp · LiveChat
- **Onderschrift:** Our automation architecture connects data, workflows, and platforms into a secure, high-performance system that grows with you.

## Testimonials — sectie `#testimonials-section` — regel ~1304
- **Eyebrow:** `007` — testimonial
- **H2:** What They're Saying
- **David Lee — Founder, Atodio Studio:** We were spending hours on repetitive tasks. Their automation system saved us 30+ hours per week and dramatically improved our sales performance.
- **Daniel Kim — Founder, ScaleLabs Education:** Our enrollment process used to require manual follow-ups and spreadsheet tracking. Now, AI handles lead qualification, scheduling, reminders, and CRM updates automatically. We've increased enrollment conversion by 35% in just one quarter.
- **Alex Johnson — Head of Operations, Finovate Consulting:** Security and compliance were major concerns for us. They designed an automation architecture that was not only efficient but enterprise-grade secure.
- **Sarah Mitchell — COO, BrightPath SaaS:** We struggled with inconsistent lead follow-ups and slow response times. Their AI automation blueprint gave us clarity first, then execution. Now, our CRM runs intelligently, leads are scored automatically, and follow-ups happen without manual effort. We've increased demo bookings by 40% while reducing operational friction.
- **Jonathan Reed — Managing Director, Nexora Digital Agency:** We were scaling fast but drowning in manual workflows. Their automation system connected our CRM, email marketing, and reporting into one intelligent flow. The result? 30+ hours saved per week and complete visibility across our pipeline.
- **Michael Tran — Founder & CEO, Skyline Realty Group:** We reduced admin work by nearly 50% and doubled our qualified appointment bookings. The ROI was faster than we expected — and the system continues to scale with us.
- **Laura Martinez — CMO, Elevate Commerce Co.:** Marketing automation always felt fragmented — too many tools, not enough cohesion. They unified everything into one intelligent ecosystem. Campaign triggers, abandoned cart flows, segmentation — all automated with precision.
- **Video-titels (overlay):** How Puno Automated 80% of Lead Handling · Scaling SaaS Operations with AI Automation

## Pricing — sectie `#pricing-section` — regel ~1611
- **Eyebrow:** `008` — pricing
- **H2:** Built for Growth at Every Stage
- **Subheading:** Whether you're starting small or scaling fast, we have an automation plan that fits.
- **Toggle:** MONTHLY / ANNUALLY (SAVE 10%)

**Maandelijkse tarieven:**
- **Starter Automation** — For small teams beginning their journey — **$499.00 /Month**
  - What's included: Workflow setup (1–3 systems) · Basic AI chatbot · CRM integration
  - Knop: Get Starter Package
- **Growth Automation** — For scaling businesses — **$1199.00 /Month** — *Most Popular*
  - Included everything in Starter, plus: Advanced workflow automation · Multi-channel AI chatbot · Sales & marketing automation · Dashboard & reporting
  - Knop: Get Growth Package

**Jaarlijkse tarieven (10% korting):**
- **Starter Automation** — **$399.00 /Month**
- **Growth Automation** — **$1099.00 /Month** — *Most Popular*
  - (zelfde feature-lijsten als hierboven)

- **Mini-CTA-blok:**
  - Titel: Not sure which plan is right for you?
  - Tekst: Book a free 30-minute AI strategy session.
  - Knop: Book a Free Consultation

## Team — sectie `#team-section` — regel ~1917
- **Eyebrow:** `009` — team
- **H2:** Meet the Automagic's Minds
- **Teamleden** (elk met social links Facebook / LinkedIn / X):
  - Taylor Jones — (Founder of Automagic)
  - Leo Martin — (CEO of Automagic)
  - Minh Nguyen — (Design Lead)
  - Aisha Rahman — (Marketing Manager)
  - Arjun Lim — (Video Editor)

## FAQ — sectie `#FAQ-section` — regel ~2128
- **Eyebrow:** `010` — FAQs
- **H2:** Common Questions
- **Vragen** (let op: alle 5 antwoorden bevatten momenteel dezelfde placeholdertekst):
  1. What industries do you work with?
  2. How long does implementation take?
  3. Do we need technical knowledge to work with you?
  4. Is AI automation secure?
  5. What kind of ROI can we expect?
- **Antwoord (identiek bij alle 5 — placeholder):** Project timelines typically range from 2 to 6 weeks, depending on complexity. Smaller automation systems — such as AI chatbots with CRM integration — can often be deployed within 2–3 weeks. More advanced projects involving multi-platform integrations, custom AI logic, internal workflow automation, and reporting dashboards may take 4–6 weeks or longer.
- **FAQ-CTA:** Have any other questions? — knop: Contact Us

---

# 2. Gedeelde onderdelen (op meerdere pagina's)

## CTA-formulier — `#CTA-Form` — index.html regel ~2353 (ook op changelog/instructions/license)
- **H2:** Your Competitors Are Automating. `<br>` Are you?
- **Subheading:** Stop wasting time on manual processes. Start building a self-running business.
- **Formuliervelden (placeholders):**
  - Your name*
  - Your company name*
  - Your business email*
  - Message
  - Verzendknop: Send Your Request! (bezig: "Please wait...")
- **Succesmelding:** Thank you! / Your submission has been received!
- **Foutmelding:** Oops! Something went wrong while submitting the form.

## Footer — `.footer` — index.html regel ~2348
- **Social links:** LinkedIn · Instagram · Facebook · Twitter X
- **Footer-navigatie:** About · Services · Projects · Pricing · FAQs
- **Copyright:** © Automagic 2026 | License | Powered by Webflow
- **Credit:** Designed by NinhStudio

---

# 3. 404-pagina — `404.html`
- **Title:** Not Found
- **Grote tekst:** 4 0 4
- **Subtekst:** This page could not be founded.
- **Knop:** Back to Home
- (navbar + footer identiek aan homepage)

# 4. Beveiligde pagina — `401.html`
- **Title:** Protected page
- **Label:** Password
- **Foutmelding:** Incorrect password. Please try again.

# 5. Changelog — `changelog.html`
- **H2:** Changelog
- **15 Mar 2026 — v2.0**
  - New Features: New features has been added
  - Bug Fixes: Resolved bug
- **15 Mar 2026 — v1.0**
  - Automagic has been released. New features are coming soon as soon as possible.
- (+ gedeeld CTA-formulier & footer)

# 6. Instructions — `instructions.html`
> Dit is de template-handleiding van de maker (over de preloader). Waarschijnlijk niet bedoeld als publieke pagina.
- **H2:** Instructions
- **Preloader — Edit Preloader:** The preloader is hidden in Designer to avoid affecting your layout.
  - Select the **Preloader** element
  - Set **Opacity → 100%**
  - Set **Pointer Events → Auto**
  - You can now edit the content: replace the **logo**, edit the **text**
- **After Editing:** Once you're done, reset the preloader: Set **Opacity → 0%**, Set **Pointer Events → None**
- **Important:** The preloader will automatically run on page load when the site is published. This is controlled by a **Page Load Interaction**, so no additional setup is required.
- (+ gedeeld CTA-formulier & footer)

# 7. License — `license.html`
- **H2:** License
- **Subheading:** All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below
- **Fonts:** Automagic uses the **Funnel Display** font, which is a free and open-use typeface. You are free to use our designs without any font licensing restrictions.
- **Images:** All images used in Automagic are free sourced from **Lummi**, ensuring they are properly licensed for use in our projects.
- **Videos:** All videos used in Automagic are free sourced from **Freepik**, ensuring they are properly licensed for use in our projects.
- **Icons:** All icons used in Automagic are free sourced from **Solar Icons** and **Tabler Icons**, ensuring they are properly licensed for use in our projects.
- (+ gedeeld CTA-formulier & footer)

# 8. Style Guide — `style-guide.html`
Standaard Webflow-typografie/stijlgids demopagina — bevat geen echte website-copy (voorbeeldkoppen, dummy lorem-tekst, kleurstalen). Niet relevant voor de content-backup.

---

## Meta / SEO teksten (index.html `<head>`, regel ~5–13)
- **Title:** Automagic - Webflow HTML website template
- **Description / OG / Twitter:** Automagic is a modern Webflow template designed for startups to build beautiful websites, manage workflows, and grow their business.

## Opmerkingen / aandachtspunten in de huidige copy
- **Placeholder-template-teksten** die nog niet aangepast zijn t.o.v. de Automagic-demo:
  - Alle knoppen "Get this Template" (hero + navbar) verwijzen nog naar de Webflow-templatepagina.
  - Alle 5 FAQ-antwoorden bevatten dezelfde tekst (over implementatietijd) — inhoudelijk kloppen ze niet bij elke vraag.
  - Case study 1 desc is dezelfde zin als processtap "Discovery & Audit".
  - Testimonial video-overlay staat meestal op "How Puno Automated 80% of Lead Handling".
  - Kleine taalfoutjes in de brontekst: "We helps startups…" (About) en "This page could not be founded." (404).
- Teksten met een `<br>` bevatten een handmatige regelafbreking in de HTML.
