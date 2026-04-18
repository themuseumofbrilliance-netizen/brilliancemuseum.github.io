/* =========================================================
   Password Gate — soft client-side protection
   =========================================================
   IMPORTANT: This is a SOFT GATE, not real security.
   The password below is visible to anyone who views page source.
   Use this only for lightly obscuring a page whose URL you haven't
   shared publicly. For materials that MUST stay private
   (confidential HNW family references, etc.), do not put them here.
   Send sensitive documents directly via email or a proper
   authenticated service instead.
   ========================================================= */

// CHANGE THIS PASSWORD to whatever you want to share with agencies.
// Avoid anything you've used elsewhere.
const TMOB_GATE_PASSWORD = 'brilliance2026';

(function () {
  const form = document.querySelector('[data-gate-form]');
  const input = document.querySelector('[data-gate-input]');
  const errorEl = document.querySelector('[data-gate-error]');
  const gate = document.querySelector('[data-gate]');
  const content = document.querySelector('[data-gate-content]');

  if (!form || !input || !gate || !content) return;

  // If already unlocked in this session, skip the gate.
  if (sessionStorage.getItem('tmob_unlocked') === 'true') {
    unlock();
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const attempt = input.value.trim();
    if (attempt === TMOB_GATE_PASSWORD) {
      sessionStorage.setItem('tmob_unlocked', 'true');
      unlock();
    } else {
      errorEl.textContent = 'That password does not match. Please try again.';
      input.value = '';
      input.focus();
    }
  });

  function unlock() {
    gate.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
  }
})();
