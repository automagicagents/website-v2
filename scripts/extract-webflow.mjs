/**
 * Zet de Webflow-exports in webflow/ om naar body-fragmenten in content/.
 * Draai dit opnieuw na elke nieuwe Webflow-export: node scripts/extract-webflow.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'webflow');
const OUT = path.join(ROOT, 'content');

// bestandsnaam (zonder .html) -> route + naam van het contentbestand
const PAGES = {
  index: { route: '/', out: 'index' },
  changelog: { route: '/changelog', out: 'changelog' },
  'style-guide': { route: '/style-guide', out: 'style-guide' },
  license: { route: '/license', out: 'license' },
  instructions: { route: '/instructions', out: 'instructions' },
  401: { route: '/401', out: '401' },
  404: { route: '/404', out: '404' },
  ___: { route: '/coming-soon', out: 'coming-soon' },
};

const ASSET_DIRS = 'css|js|images|videos|fonts';

function rewritePaths(html) {
  // Relatieve asset-paden absoluut maken zodat ze op elke route werken
  // (dekt src="...", href="...", poster="...", srcset ", images/...",
  // data-video-urls "videos/a.mp4,videos/b.webm" en url(images/...))
  html = html.replace(new RegExp(`(["'(,]\\s*)((?:${ASSET_DIRS})/)`, 'g'), '$1/$2');

  // Interne paginalinks omzetten naar Next.js-routes
  html = html.replace(
    /href="(?:\.\/)?(index|changelog|style-guide|license|instructions|401|404|___)\.html(#[^"]*)?"/g,
    (_, name, hash = '') => `href="${PAGES[name].route}${hash}"`
  );
  return html;
}

fs.mkdirSync(OUT, { recursive: true });

for (const [name, { out }] of Object.entries(PAGES)) {
  const file = path.join(SRC, `${name}.html`);
  if (!fs.existsSync(file)) {
    console.warn(`skip: ${name}.html niet gevonden`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');

  const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const pageId = html.match(/data-wf-page="([^"]+)"/)?.[1] ?? '';

  // Paginaspecifieke <style>-blokken uit de head meenemen
  const styles = [...head.matchAll(/<style>[\s\S]*?<\/style>/g)].map((m) => m[0]);

  const fragment = [
    ...styles,
    // webflow.js leest data-wf-page van <html>; zet die vóór de scripts onderaan draaien
    `<script>document.documentElement.setAttribute('data-wf-page', '${pageId}');</script>`,
    body,
  ].join('\n');

  fs.writeFileSync(path.join(OUT, `${out}.html`), rewritePaths(fragment));
  console.log(`content/${out}.html geschreven (wf-page ${pageId})`);
}
