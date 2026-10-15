import { readFileSync } from 'node:fs';
import path from 'node:path';

// Root (/) serveert de losse coming-soon pagina uit index.html (repo root).
// De vorige coming-soon staat als backup in index_comingsoon_backup.html en
// blijft bereikbaar op /coming-soon. De echte homepage staat op /live.
export const dynamic = 'force-static';

export function GET() {
  const html = readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
