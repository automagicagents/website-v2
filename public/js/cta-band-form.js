/**
 * CTA Band Form Handler
 * Submits form via Resend API (reuses contact form logic)
 */

(function() {
  'use strict';
  
  const form = document.getElementById('cta-band-form');
  if (!form) return;
  
  const successMessage = form.nextElementSibling;
  const errorMessage = successMessage ? successMessage.nextElementSibling : null;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = form.querySelector('.submit-button');
    const originalText = submitButton.value;
    submitButton.value = 'Een momentje...';
    submitButton.disabled = true;
    
    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        message: formData.get('message') || ''
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        form.style.display = 'none';
        if (successMessage) {
          successMessage.style.display = 'flex';
        }
        
        // Reset after 5 seconds
        setTimeout(() => {
          form.reset();
          form.style.display = 'flex';
          if (successMessage) {
            successMessage.style.display = 'none';
          }
          submitButton.value = originalText;
          submitButton.disabled = false;
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      if (errorMessage) {
        errorMessage.style.display = 'block';
      }
      submitButton.value = originalText;
      submitButton.disabled = false;
      
      // Hide error after 5 seconds
      setTimeout(() => {
        if (errorMessage) {
          errorMessage.style.display = 'none';
        }
      }, 5000);
    }
  });
})();
