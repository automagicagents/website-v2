# Automagic website (Next.js)

Webflow-export omgezet naar een Next.js-app zodat de site op Vercel gedeployed kan worden.

## Structuur

- `webflow/` — de originele Webflow HTML-exports (bron van de content)
- `scripts/extract-webflow.mjs` — zet de exports om naar body-fragmenten in `content/`
- `content/` — gegenereerde HTML-fragmenten die de Next.js-pagina's renderen
- `app/` — Next.js App Router-pagina's (één route per Webflow-pagina)
- `public/` — css, js, images, videos en fonts (zelfde mappenstructuur als de export)

## Commands

```bash
npm install       # eenmalig
npm run dev       # lokaal ontwikkelen op http://localhost:3000
npm run build     # productie-build
npm run extract   # opnieuw draaien na een nieuwe Webflow-export in webflow/
```

## Nieuwe Webflow-export verwerken

1. Zet de nieuwe HTML-bestanden in `webflow/` en de assets in `public/` (css/js/images/videos/fonts).
2. Draai `npm run extract`.
3. Controleer lokaal met `npm run dev`.

## Contactformulier (Resend)

Het CTA-formulier ("Je concurrenten automatiseren. En jij?") verstuurt inzendingen via
[Resend](https://resend.com) naar `midas@automagicai.nl`:

- `app/api/contact/route.js` — API-route die de mail verstuurt (afzender: `website@noreply.automagicagents.com`)
- `public/js/contact-form.js` — onderschept de Webflow-formulieren en post naar `/api/contact`

Vereiste environment variables (lokaal in `.env.local`, op Vercel via Settings → Environment Variables):

- `RESEND_API_KEY` — verplicht
- `CONTACT_EMAIL` — optioneel, overschrijft het standaard ontvangstadres

## Deployen op Vercel

Importeer de repo op [vercel.com/new](https://vercel.com/new) — Vercel herkent Next.js automatisch, geen extra configuratie nodig. Of via de CLI: `npx vercel`.

## Routes

| Route | Bron |
| --- | --- |
| `/` | `webflow/index.html` |
| `/changelog` | `webflow/changelog.html` |
| `/style-guide` | `webflow/style-guide.html` |
| `/license` | `webflow/license.html` |
| `/instructions` | `webflow/instructions.html` |
| `/401` | `webflow/401.html` |
| `/coming-soon` | `webflow/___.html` |
| elke onbekende URL | `webflow/404.html` (via `app/not-found.jsx`) |
