/* ========================================================================
   ONE RUPEE MEDIA — pages/social/social.js
   Social division page: features, events, community stats.
   ======================================================================== */

function SocialPage() {
  const features = [
    { icon: ICONS.users, title: "Creator Network",    desc: "Join 200+ verified creators. Access brand deals, collabs, and peer knowledge inside a private network." },
    { icon: ICONS.star,  title: "Social Community",   desc: "An engaged community of creators, marketers, and brand builders who share, grow, and collaborate." },
    { icon: ICONS.play,  title: "Workshops",          desc: "Hands-on workshops on content creation, monetization, brand deals, and personal branding." },
    { icon: ICONS.mic,   title: "Networking Events",  desc: "Curated in-person and virtual events connecting creators with brands, investors, and industry leaders." },
  ];

  const events = [
    { title: "Creator Conclave 2025",    date: "15 Aug 2025",    location: "Pokhara", seats: "320 registered" },
    { title: "Brand × Creator Mixer",   date: "02 Sep 2025",    location: "Kathmandu", seats: "120 registered" },
  ];

  const communityStats = [
    { n: "200+",  l: "Creators" },
    { n: "50+",   l: "Events" },
    { n: "30+",   l: "Workshops" },
    { n: "15K+",  l: "Community Members" },
  ];

  return `
    <div class="pt-nav">
      <!-- ── Hero ── -->
      <section class="section" style="padding-top:96px;">
        ${Tag("Division 04")}
        <div class="grid grid-cols-1 md-grid-2" style="gap:48px;margin-top:24px;align-items:end;">
          <div>
            <h1 class="big-title-sm" style="margin-bottom:24px;">ONE RUPEE<br>SOCIAL</h1>
          </div>
          <div>
            <p class="lead" style="max-width:none;">
              Nepal's fastest-growing creator community. We bring together talent, brands, and storytellers to build the next generation of digital Nepal.
            </p>
            <button class="btn-submit-inline" data-goto="register" style="background:var(--foreground);margin-top:24px;">
              Join the Network ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      </section>

      <!-- ── Community image ── -->
      <img
        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1400&auto=format&fit=crop&q=80"
        alt="Creator community networking event — people collaborating and connecting"
        class="social-hero-img"
        loading="lazy"
      />

      ${Divider()}

      <!-- ── Feature cards ── -->
      <section class="section">
        <div class="gap-px-bordered grid-cols-1 md-grid-2">
          ${features.map(f => `
            <div class="feature-card">
              <div class="feature-icon">${f.icon}</div>
              <h3 class="feature-title">${f.title}</h3>
              <p class="text-muted" style="line-height:1.7;">${f.desc}</p>
            </div>`).join("")}
        </div>
      </section>

      ${Divider()}

      <!-- ── Events ── -->
      <section class="section">
        <div class="section-flex-between">
          <h2 class="font-black" style="font-size:30px;">Upcoming Events</h2>
          ${Tag("2025")}
        </div>
        <div class="divider">
          ${events.map(e => `
            <div class="event-row">
              <div class="event-title">${e.title}</div>
              <div class="event-meta">${e.date}</div>
              <div class="event-meta">${e.location}</div>
              <div class="event-seats">${e.seats}</div>
            </div>`).join("")}
        </div>
      </section>

      <!-- ── Community stats ── -->
      <section class="community-stats">
        <div class="community-stats-grid">
          ${communityStats.map(s => `
            <div class="community-stat">
              <div class="community-stat-num">${s.n}</div>
              <div class="community-stat-label">${s.l}</div>
            </div>`).join("")}
        </div>
      </section>
    </div>
  `;
}
