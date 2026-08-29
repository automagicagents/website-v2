import fs from 'node:fs';
import path from 'node:path';

/**
 * Leest een geëxtraheerd Webflow-fragment uit content/ en rendert het verbatim.
 * De scripts onderin het fragment (jQuery, webflow.js, GSAP, automagic.js)
 * draaien gewoon omdat de pagina statisch wordt voorgerenderd.
 */
export function WebflowPage({ name }) {
  const html = fs.readFileSync(path.join(process.cwd(), 'content', `${name}.html`), 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
