/* ========================================================================
   ONE RUPEE MEDIA — pages/media/media.js
   Media division page: hero, services, case studies, CTA.
   ======================================================================== */

function MediaPage() {
  const services = [
    { title: "Content Creation",       icon: "✦", desc: "From scripting to publishing — we create thumb-stopping content tailored to your brand voice across every format." },
    { title: "Social Media Marketing", icon: "◆", desc: "Data-driven campaigns across Instagram, YouTube, LinkedIn, and X. We grow audiences that convert." },
    { title: "Influencer Marketing",   icon: "▲", desc: "We connect brands with the right creators — micro, mid, or macro — for authentic, high-impact partnerships." },
    { title: "Influencer Management",  icon: "●", desc: "End-to-end talent management: contracts, brand deals, content strategy, and career growth for creators." },
    { title: "Brand Management",       icon: "■", desc: "Brand identity, positioning, and consistency across every touchpoint — online and offline." },
  ];

  const caseStudies = [
    {
      brand: "FoodieHub",   result: "3.2M impressions in 30 days",  category: "Food & Beverage",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=70",
      imgAlt: "Colourful food spread for a brand shoot",
    },
    {
      brand: "TechWear Co.", result: "180% increase in DTC sales", category: "Fashion Tech",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=70",
      imgAlt: "Close-up of a tech wearable on a wrist",
    },
    {
      brand: "UrbanNest",    result: "50K followers in 60 days",    category: "Real Estate",
      img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&auto=format&fit=crop&q=70",
      imgAlt: "Modern apartment interior for UrbanNest",
    },
  ];

  return `
    <div class="pt-nav">
      <!-- ── Hero ── -->
      <section class="bg-dark" style="padding:96px 24px;">
        <div class="container">
          ${Tag("Division 01")}
          <h1 class="big-title" style="margin:24px 0;">ONE RUPEE<br>MEDIA</h1>
          <p class="lead" style="color:rgba(255,255,255,0.6);max-width:36rem;">
            We craft digital narratives that move people. From content strategy to full brand management — this is where your story lives.
          </p>
        </div>
      </section>

      <!-- ── Hero image ── -->
      <img
        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&auto=format&fit=crop&q=80"
        alt="Social media content creation — phones, cameras and creative planning on a desk"
        class="media-hero-image"
        loading="lazy"
      />

      <!-- ── Services ── -->
      <section class="section">
        <h2 class="font-black" style="font-size:30px;margin-bottom:48px;">What We Do</h2>
        <div class="media-service-grid">
          ${services.map(s => `
            <div class="media-service-item">
              <span class="media-service-icon font-mono text-muted">${s.icon}</span>
              <div>
                <h3 class="font-black" style="font-size:20px;margin-bottom:8px;">${s.title}</h3>
                <p class="text-muted" style="line-height:1.7;">${s.desc}</p>
              </div>
            </div>`).join("")}
        </div>
      </section>

      ${Divider()}

      <!-- ── Case studies ── -->
      <section class="section">
        <div class="section-flex-between">
          <h2 class="font-black" style="font-size:30px;">Case Studies</h2>
          ${Tag("Selected Work")}
        </div>
        <div class="case-study-grid">
          ${caseStudies.map(c => `
            <div class="case-study-card">
              <img src="${c.img}" alt="${c.imgAlt}" class="case-study-image" loading="lazy" />
              <div>
                <div class="font-mono text-muted" style="font-size:12px;margin-bottom:12px;">${c.category}</div>
                <div class="font-black" style="font-size:24px;">${c.brand}</div>
              </div>
              <div class="text-muted" style="font-size:14px;border-top:1px solid var(--border);padding-top:16px;">${c.result}</div>
            </div>`).join("")}
        </div>
      </section>

      <!-- ── CTA ── -->
      <section class="bg-secondary" style="padding:80px 24px;text-align:center;">
        <h2 class="font-black" style="font-size:36px;margin-bottom:24px;">Let us tell your story</h2>
        <button class="btn-submit-inline" data-goto="contact" style="background:var(--foreground);">
          Start a Project ${ICONS.arrowRight}
        </button>
      </section>
    </div>
  `;
}
