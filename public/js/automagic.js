/*
 * Automagic — custom GSAP animaties
 * Vervangt gaandeweg de Webflow IX2-interacties.
 *
 * Scroll-reveal: elk element met [data-reveal] fadet in met een lichte
 * blur + omhoog-beweging zodra het in beeld komt. Dit repliceert de
 * standaard Webflow-reveal (opacity 0 -> 1, y 2rem -> 0, blur 5px -> 0).
 *
 * Opties per element via data-attributen:
 *   data-reveal-delay="0.2"   extra vertraging in seconden
 *   data-reveal-y="48"        verplaatsing in px (default 32 = 2rem)
 */
(function () {
  if (!window.gsap) return;
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  var els = gsap.utils.toArray('[data-reveal]');
  if (!els.length) return;

  var reduceMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Geen animatie gewenst/mogelijk: alles direct tonen.
  if (reduceMotion || !ScrollTrigger) {
    gsap.set(els, { clearProps: 'opacity,transform,filter' });
    els.forEach(function (el) { el.style.opacity = '1'; });
    return;
  }

  // Begintoestand (voorkomt flikker samen met de CSS-guard in <head>).
  els.forEach(function (el) {
    var y = parseFloat(el.getAttribute('data-reveal-y')) || 32;
    gsap.set(el, { opacity: 0, y: y, filter: 'blur(5px)' });
  });

  // Reveal wanneer elementen in beeld komen; elementen die tegelijk
  // binnenkomen krijgen een subtiele stagger.
  ScrollTrigger.batch(els, {
    start: 'top 85%',
    once: true,
    onEnter: function (batch) {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.12,
        delay: function (i, el) {
          return parseFloat(el.getAttribute('data-reveal-delay')) || 0;
        },
        overwrite: true,
        onComplete: function () {
          // Blur-laag opruimen (repaint-kosten) — opacity/transform blijven inline.
          gsap.set(batch, { clearProps: 'filter' });
        }
      });
    }
  });
})();
