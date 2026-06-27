/* ========================================================================
   ONE RUPEE MEDIA — app.js
   SPA entry point: page registry, render loop, event binding.
   Add new pages here — this is the ONLY file that needs updating.
   ======================================================================== */

// ---------------------------------------------------------------------------
// Page registry — maps hash names to page renderer functions
// All renderers are defined in pages/<name>/<name>.js (loaded before app.js)
// ---------------------------------------------------------------------------
const PAGES = {
  home:       HomePage,
  media:      MediaPage,
  podcast:    PodcastPage,
  production: ProductionPage,
  social:     SocialPage,
  about:      AboutPage,
  contact:    ContactPage,
  login:      LoginPage,
  register:   RegisterPage,
};

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------
function render() {
  const root   = document.getElementById("root");
  const pageFn = PAGES[state.page] || HomePage;

  root.innerHTML = `
    <main>${pageFn()}</main>
  `;

  updateNav();
  attachEvents();
}

// ---------------------------------------------------------------------------
// Event binding (called after every render)
// ---------------------------------------------------------------------------
function attachEvents() {
  // Generic page-link buttons (data-goto="<page>")
  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => goto(el.getAttribute("data-goto")));
  });

  // Mobile burger toggle
  const burger = document.getElementById("burgerBtn");
  if (burger) {
    burger.addEventListener("click", () => {
      state.mobileNavOpen = !state.mobileNavOpen;
      render();
    });
  }

  // ── Contact form ──
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      state.contact.name    = document.getElementById("c-name").value;
      state.contact.email   = document.getElementById("c-email").value;
      state.contact.company = document.getElementById("c-company").value;
      state.contact.service = document.getElementById("c-service").value;
      state.contact.message = document.getElementById("c-message").value;
      state.contact.sent    = true;
      render();
    });
  }

  // ── Login form ──
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Sign in submitted (demo only — no backend connected).");
    });

    const toggle = document.getElementById("loginShowToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        state.login.email    = document.getElementById("l-email").value;
        state.login.password = document.getElementById("l-password").value;
        state.login.show     = !state.login.show;
        render();
      });
    }
  }

  // ── Register step 1 ──
  const registerStep1 = document.getElementById("registerStep1");
  if (registerStep1) {
    registerStep1.addEventListener("submit", (e) => {
      e.preventDefault();
      state.register.name     = document.getElementById("r-name").value;
      state.register.email    = document.getElementById("r-email").value;
      state.register.password = document.getElementById("r-password").value;
      state.register.confirm  = document.getElementById("r-confirm").value;
      state.register.step     = 2;
      render();
    });

    const toggle = document.getElementById("registerShowToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        state.register.name     = document.getElementById("r-name").value;
        state.register.email    = document.getElementById("r-email").value;
        state.register.password = document.getElementById("r-password").value;
        state.register.confirm  = document.getElementById("r-confirm").value;
        state.register.show     = !state.register.show;
        render();
      });
    }
  }

  // ── Register step 2 ──
  const registerStep2 = document.getElementById("registerStep2");
  if (registerStep2) {
    registerStep2.querySelectorAll(".type-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.register.type = btn.getAttribute("data-type");
        render();
      });
    });

    const backBtn = document.getElementById("registerBackBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        state.register.step = 1;
        render();
      });
    }

    registerStep2.addEventListener("submit", (e) => {
      e.preventDefault();
      state.register.division = document.getElementById("r-division").value;
      alert("Account created (demo only — no backend connected).");
    });
  }
}

// ---------------------------------------------------------------------------
// Hash-based routing
// ---------------------------------------------------------------------------
function initFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash && PAGES[hash]) state.page = hash;
}

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash && PAGES[hash]) {
    state.page = hash;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
initFromHash();
render();
