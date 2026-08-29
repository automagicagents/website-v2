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
 *
 * Hero-intro: elementen met [data-intro] spelen bij page-load een
 * gestaggerde fade af; de hero-heading wordt daarbij via SplitText
 * per letter van wazig (blur) naar scherp gebracht.
 */
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-intro]'));
  if (!els.length) return;

  var reduceMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showAll(items) {
    items.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
    });
  }

  if (!window.gsap || reduceMotion) {
    showAll(els);
    return;
  }

  var gsap = window.gsap;
  if (window.SplitText) gsap.registerPlugin(window.SplitText);
  var heading = document.querySelector('.hero-heading[data-intro]');
  var rest = els.filter(function (el) { return el !== heading; });
  var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  var restStart = 0;

  if (heading && window.SplitText) {
    var split = new window.SplitText(heading, { type: 'words,chars' });
    gsap.set(heading, { opacity: 1 });
    tl.from(split.chars, {
      opacity: 0,
      filter: 'blur(8px)',
      y: '0.25em',
      duration: 0.8,
      stagger: 0.03,
      onComplete: function () {
        // Terug naar de originele markup (selecteerbaarheid, geen extra spans).
        split.revert();
      }
    });
    restStart = 0.35;
  } else if (heading) {
    rest.unshift(heading);
  }

  if (rest.length) {
    gsap.set(rest, { opacity: 0, y: 24, filter: 'blur(5px)' });
    tl.to(rest, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: 0.12,
      onComplete: function () {
        gsap.set(rest, { clearProps: 'filter' });
      }
    }, restStart);
  }
})();

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
