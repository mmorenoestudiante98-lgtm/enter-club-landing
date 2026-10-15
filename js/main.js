(function () {
  var TALLY = 'https://tally.so/r/68oG5O';
  var KEY = 'ec_cookie_consent_v2';
  var $ = function (id) { return document.getElementById(id); };

  // Palabras rotatorias del hero (ida y vuelta)
  var words = $('hero-palabras');
  if (words) {
    var n = words.children.length, i = 0, dir = 1;
    setInterval(function () {
      i += dir;
      if (i >= n - 1) { i = n - 1; dir = -1; } else if (i <= 0) { i = 0; dir = 1; }
      words.style.transform = 'translateY(' + (-i * 1.05) + 'em)';
    }, 2300);
  }

  // Preguntas frecuentes (acordeón)
  var faqBtns = document.querySelectorAll('.ec-faq-btn');
  faqBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      faqBtns.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        $(b.getAttribute('aria-controls')).hidden = true;
      });
      if (!open) { btn.setAttribute('aria-expanded', 'true'); $(btn.getAttribute('aria-controls')).hidden = false; }
    });
  });

  // Consentimiento de cookies (solo guarda la elección; no carga ningún script de terceros)
  var banner = $('cookie-banner'), config = $('cookie-config'), sw = $('switch-cookies-analiticas'), cfgBtn = $('btn-cookies-configurar');
  if (!banner) return;
  function analyticsAllowed(c) { return c === 'accepted' || c === 'custom:analytics'; }
  function publish(c) {
    window.ecCookieConsent = { choice: c, analytics: analyticsAllowed(c) };
    document.dispatchEvent(new CustomEvent('ec:cookie-consent', { detail: window.ecCookieConsent }));
  }
  function save(c) {
    try { localStorage.setItem(KEY, c); } catch (e) {}
    banner.hidden = true; config.hidden = true; cfgBtn.textContent = 'Configurar';
    publish(c);
  }
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored) publish(stored); else banner.hidden = false;
  sw.addEventListener('click', function () { sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') === 'true' ? 'false' : 'true'); });
  $('btn-cookies-aceptar').addEventListener('click', function () { save('accepted'); });
  $('btn-cookies-rechazar').addEventListener('click', function () { save('rejected'); });
  cfgBtn.addEventListener('click', function () {
    if (config.hidden) { config.hidden = false; cfgBtn.textContent = 'Guardar selección'; }
    else save(sw.getAttribute('aria-checked') === 'true' ? 'custom:analytics' : 'custom:none');
  });
  $('btn-cookies-abrir-ajustes').addEventListener('click', function () {
    var cur = null; try { cur = localStorage.getItem(KEY); } catch (e) {}
    sw.setAttribute('aria-checked', analyticsAllowed(cur) ? 'true' : 'false');
    banner.hidden = false; config.hidden = false; cfgBtn.textContent = 'Guardar selección';
  });
})();
