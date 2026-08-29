/* Verstuurt de Webflow-formulieren (.form_form) via /api/contact (Resend)
   en toont de Webflow succes-/foutmelding. Capture-fase zodat dit vóór
   webflow.js draait, die het formulier anders naar Webflow probeert te sturen. */
(function () {
  document.addEventListener(
    'submit',
    function (e) {
      var form = e.target;
      if (!form.classList || !form.classList.contains('form_form')) return;

      e.preventDefault();
      e.stopPropagation();

      var wrap = form.closest('.w-form');
      var done = wrap && wrap.querySelector('.w-form-done');
      var fail = wrap && wrap.querySelector('.w-form-fail');
      var submit = form.querySelector('input[type="submit"]');
      var originalValue = submit ? submit.value : '';

      if (fail) fail.style.display = 'none';
      if (submit) {
        submit.value = submit.getAttribute('data-wait') || originalValue;
        submit.disabled = true;
      }

      var data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = value;
      });

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          if (!res.ok) throw new Error('send failed');
          form.style.display = 'none';
          if (done) done.style.display = 'block';
        })
        .catch(function () {
          if (fail) fail.style.display = 'block';
        })
        .finally(function () {
          if (submit) {
            submit.value = originalValue;
            submit.disabled = false;
          }
        });
    },
    true
  );
})();
