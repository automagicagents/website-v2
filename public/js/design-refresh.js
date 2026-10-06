/**
 * Design Refresh enhancements
 * - Navbar background on scroll
 * - Image lazy load fade-in
 * - Smooth scroll behavior
 */

(function() {
  'use strict';
  
  // Navbar background on scroll
  function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar-bg-blur');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
      navbar.classList.add('visible');
      document.body.classList.add('scrolled');
    } else {
      navbar.classList.remove('visible');
      document.body.classList.remove('scrolled');
    }
  }
  
  // Lazy loaded images fade-in
  function handleImageLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
        imageObserver.observe(img);
      }
    });
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    // Navbar scroll
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    
    // Image loading
    handleImageLoad();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
})();
