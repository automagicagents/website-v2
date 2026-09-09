import { WebflowPage } from '../lib/webflow-page';

// Tijdelijk: coming soon op de root, de echte site staat op /live
export const metadata = {
  title: 'Coming Soon | Automagic',
  description:
    'We werken aan een nieuwe website. Automagic helpt startups en bedrijven met het bouwen van slimme, zelfsturende processen met behulp van AI-automatisering.',
};

export default function Home() {
  return <WebflowPage name="coming-soon" />;
}
