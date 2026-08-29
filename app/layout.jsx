export const metadata = {
  title: 'Automagic — We make your Sales AI First',
  description:
    'Automagic helpt startups en bedrijven met het bouwen van slimme, zelfsturende processen met behulp van AI-automatisering.',
  openGraph: {
    title: 'Automagic — We make your Sales AI First',
    description:
      'Automagic helpt startups en bedrijven met het bouwen van slimme, zelfsturende processen met behulp van AI-automatisering.',
    type: 'website',
    images: ['/images/cover-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automagic — We make your Sales AI First',
    description:
      'Automagic helpt startups en bedrijven met het bouwen van slimme, zelfsturende processen met behulp van AI-automatisering.',
  },
};

// Zet de w-mod-js/w-mod-touch classes vóór de eerste paint, net als in de Webflow-export
const webflowModScript = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;

/* Niet elke browser ondersteunt het media-attribuut op icon-links (o.a. Firefox),
   en het icoon moet ook meewisselen als het systeemthema live verandert. */
const themeIconScript = `(function () {
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var icons = [
    { rel: 'icon', light: '/images/favicon.png', dark: '/images/favicon-dark.png' },
    { rel: 'apple-touch-icon', light: '/images/webclip.png', dark: '/images/webclip-dark.png' }
  ];
  function apply() {
    var old = document.head.querySelectorAll('link[data-theme-icon]');
    Array.prototype.forEach.call(old, function (el) { el.parentNode.removeChild(el); });
    icons.forEach(function (icon) {
      var link = document.createElement('link');
      link.rel = icon.rel;
      link.href = mq.matches ? icon.dark : icon.light;
      link.setAttribute('data-theme-icon', '');
      document.head.appendChild(link);
    });
  }
  apply();
  if (mq.addEventListener) { mq.addEventListener('change', apply); }
  else if (mq.addListener) { mq.addListener(apply); }
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="nl" data-wf-site="6a560c68a58c305d2ddb193c" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
          rel="stylesheet"
        />
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/automagic-v2.webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="/images/favicon.png"
          rel="icon"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/images/favicon-dark.png"
          rel="icon"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="/images/webclip.png"
          rel="apple-touch-icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/images/webclip-dark.png"
          rel="apple-touch-icon"
          media="(prefers-color-scheme: dark)"
        />
        <script dangerouslySetInnerHTML={{ __html: webflowModScript }} />
        <script dangerouslySetInnerHTML={{ __html: themeIconScript }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <script src="/js/contact-form.js" defer />
      </body>
    </html>
  );
}
