/* ========================================================================
   ONE RUPEE MEDIA — global.js
   Shared runtime: icons, state, routing helpers, nav, footer.
   Loaded before every page module.
   ======================================================================== */

// ---------------------------------------------------------------------------
// Icon helpers (inline SVGs)
// ---------------------------------------------------------------------------
const ICONS = {
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`,
  x: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  chevronRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  play: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  mic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  camera: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
  users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  star: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mapPin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`,
  instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  youtube: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
  twitter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
};

// ---------------------------------------------------------------------------
// App state (single source of truth for the entire SPA)
// ---------------------------------------------------------------------------
const state = {
  page: "home",
  mobileNavOpen: false,
  contact:  { name: "", email: "", company: "", service: "", message: "", sent: false },
  login:    { email: "", password: "", show: false },
  register: { name: "", email: "", password: "", confirm: "", type: "", division: "", show: false, step: 1 },
};

const NAV_LINKS = [
  { label: "Media",      page: "media"      },
  { label: "Podcast",    page: "podcast"    },
  { label: "Production", page: "production" },
  { label: "Social",     page: "social"     },
  { label: "About",      page: "about"      },
  { label: "Contact",    page: "contact"    },
];

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
function goto(page) {
  state.page = page;
  state.mobileNavOpen = false;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", "#" + page);
}

// ---------------------------------------------------------------------------
// Shared component helpers
// ---------------------------------------------------------------------------
function Tag(text) {
  return `<span class="tag">${text}</span>`;
}

function Divider() {
  return `<div class="divider"></div>`;
}

// ---------------------------------------------------------------------------
// Nav updater (called after every render — nav lives in the HTML, not #root)
// ---------------------------------------------------------------------------
function updateNav() {
  document.querySelectorAll('.nav-links .nav-link').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-goto') === state.page);
  });
  document.querySelectorAll('.nav-mobile .nav-link').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-goto') === state.page);
  });

  const burger = document.getElementById('burgerBtn');
  if (burger) burger.innerHTML = state.mobileNavOpen ? ICONS.x : ICONS.menu;

  const mobileMenu = document.querySelector('.nav-mobile');
  if (mobileMenu) mobileMenu.classList.toggle('open', state.mobileNavOpen);
}

function hydrateFooterIcons() {
  const iconNames = {
    instagram: ICONS.instagram,
    youtube: ICONS.youtube,
    twitter: ICONS.twitter,
    linkedin: ICONS.linkedin,
  };

  document.querySelectorAll('.footer-social [data-icon]').forEach((el) => {
    const key = el.getAttribute('data-icon');
    if (iconNames[key] && !el.innerHTML.trim()) {
      el.innerHTML = iconNames[key];
    }
  });
}

function observeFooterIcons() {
  const observer = new MutationObserver(() => hydrateFooterIcons());
  observer.observe(document.body, { childList: true, subtree: true });
}

observeFooterIcons();

// ---------------------------------------------------------------------------
// Footer renderer
// ---------------------------------------------------------------------------
function renderFooter() {
  const cols = [
    { title: "Divisions", links: [["Media","media"],["Podcast","podcast"],["Production","production"],["Social","social"]] },
    { title: "Company",   links: [["About","about"],["Contact","contact"]] },
    { title: "Account",   links: [["Login","login"],["Register","register"]] },
  ];

  const colsHtml = cols.map(c => `
    <div>
      <div class="footer-col-title">${c.title}</div>
      <div class="footer-links">
        ${c.links.map(([label, page]) => `<button data-goto="${page}">${label}</button>`).join("")}
      </div>
    </div>`).join("");

  return `
    <footer>
      <div class="footer-grid">
        <div class="footer-col-span" style="grid-column:span 2;">
          <button class="font-black" style="font-size:20px;margin-bottom:16px;display:block;" data-goto="home">ONE RUPEE</button>
          <p class="text-muted" style="font-size:14px;line-height:1.6;">Four divisions. One vision. Pokhara, Nepal.</p>
        </div>
        ${colsHtml}
      </div>
      ${Divider()}
      <div class="footer-bottom">
        <span class="font-mono text-muted" style="font-size:12px;">© 2025 One Rupee. All rights reserved.</span>
        <div class="footer-social">
          <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">${ICONS.instagram}</a>
          <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer">${ICONS.youtube}</a>
          <a aria-label="Twitter/X" href="https://twitter.com" target="_blank" rel="noreferrer">${ICONS.twitter}</a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer">${ICONS.linkedin}</a>
        </div>
      </div>
    </footer>
  `;
}
