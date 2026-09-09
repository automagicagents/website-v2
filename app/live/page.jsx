import { WebflowPage } from '../../lib/webflow-page';

// Tijdelijk: de echte homepage, bereikbaar op /live zolang de root de coming-soon toont
export const metadata = {
  robots: { index: false, follow: false },
};

export default function Live() {
  return <WebflowPage name="index" />;
}
