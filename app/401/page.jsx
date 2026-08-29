import { WebflowPage } from '../../lib/webflow-page';

export const metadata = {
  title: 'Protected page',
};

export default function Protected() {
  return <WebflowPage name="401" />;
}
