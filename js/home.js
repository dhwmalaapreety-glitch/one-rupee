/* ========================================================================
   ONE RUPEE MEDIA — pages/home/home.js
   Home page: hero, divisions, clients strip, CTA.
   ======================================================================== */

function HomePage() {
  const divisions = [
    {
      page: "media", label: "One Rupee Media", index: "01",
      services: ["Content Creation", "Social Media Marketing", "Influencer Marketing", "Brand Management"],
    },
    {
      page: "podcast", label: "One Rupee Podcast", index: "02",
      services: ["Podcast Production", "Podcast Ads", "Brand Collaborations", "Distribution"],
    },
    {
      page: "production", label: "One Rupee Production", index: "03",
      services: ["Photography", "Videography", "Wedding Shoots", "Commercial Production"],
    },
    {
      page: "social", label: "One Rupee Social", index: "04",
      services: ["Creator Network", "Events", "Workshops", "Networking"],
    },
  ];

  const stats = [
    { value: "500+", label: "Brands Served" },
    { value: "12M+", label: "Reach Generated" },
    { value: "200+", label: "Creators Managed" },
    { value: "₹1",   label: "Where it all started" },
  ];

  const clients = ["ZARA", "Myntra", "Nykaa", "Tanishq", "Tata", "Spotify", "MakeMyTrip", "boAt"];

  const tickerWords = Array(4).fill(
    ["MEDIA","PODCAST","PRODUCTION","SOCIAL","CONTENT","BRANDING","COMMUNITY","CREATORS"]
  ).flat();

  return `
    <div>
      <!-- ── Hero ── -->
      <section class="hero-home">
        <div class="hero-home-grid">
          <div>
            ${Tag("Est. 2022 · Pokhara, Nepal")}
            <h1 class="hero-title">ONE<br>RUPEE</h1>
            <p class="lead">Four divisions. One vision. We build brands, amplify voices, capture moments, and connect communities — all under one roof.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:24px;">
            <div class="hero-stats">
              ${stats.map(s => `
                <div>
                  <div class="hero-stat-value">${s.value}</div>
                  <div class="hero-stat-label">${s.label}</div>
                </div>`).join("")}
            </div>
            <button class="cta-arrow" data-goto="about"
              style="display:flex;align-items:center;gap:8px;font-size:14px;letter-spacing:0.15em;text-transform:uppercase;"
              onmouseover="this.style.gap='16px'" onmouseout="this.style.gap='8px'">
              Our Story ${ICONS.arrowRight}
            </button>
          </div>
        </div>

        <!-- Marquee ticker -->
        <div class="ticker-wrap">
          <div class="ticker">
            ${tickerWords.map(t => `<span>${t}</span>`).join("")}
          </div>
        </div>
      </section>

      <!-- ── Full-width editorial image ── -->
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&auto=format&fit=crop&q=80"
        alt="Creative team collaborating in a modern Pokhara studio"
      />

      <!-- ── Divisions ── -->
      <section class="section">
        <div class="section-flex-between">
          <h2 class="section-title">Our Divisions</h2>
          <span class="font-mono text-muted" style="font-size:12px;">04 VERTICALS</span>
        </div>
        <div class="divider">
          ${divisions.map(d => `
            <button class="division-row" data-goto="${d.page}">
              <span class="font-mono text-muted" style="font-size:12px;">${d.index}</span>
              <span class="font-black" style="font-size:22px;">${d.label}</span>
              <div class="division-services">
                ${d.services.map(s => `<span>${s}</span>`).join("")}
              </div>
              <span class="chevron">${ICONS.chevronRight}</span>
            </button>`).join("")}
        </div>
      </section>

      <!-- ── Client logos strip ── -->
      <div class="clients-strip">
        <div class="clients-strip-inner">
          <div class="clients-strip-label">Trusted by leading brands</div>
          <div class="clients-logos">
            ${clients.map(c => `<span>${c}</span>`).join("")}
          </div>
        </div>
      </div>

      <!-- ── CTA strip ── -->
      <section class="cta-strip">
        <div class="cta-strip-inner">
          <div>
            <h2 class="font-black" style="font-size:36px;margin-bottom:16px;">Ready to build<br>something great?</h2>
            <p class="text-white-60" style="max-width:28rem;">Whether you are a brand, a creator, or a storyteller — One Rupee has a home for you.</p>
          </div>
          <div class="btn-row">
            <button data-goto="contact"
              style="font-size:14px;letter-spacing:0.15em;text-transform:uppercase;border:1px solid white;padding:16px 32px;transition:all .2s;"
              onmouseover="this.style.background='white';this.style.color='#252525'"
              onmouseout="this.style.background='transparent';this.style.color='white'">
              Get in Touch
            </button>
            <button data-goto="register"
              style="font-size:14px;letter-spacing:0.15em;text-transform:uppercase;background:white;color:#252525;padding:16px 32px;transition:opacity .2s;"
              onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1">
              Join the Network
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
}
