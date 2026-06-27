/* ========================================================================
   ONE RUPEE MEDIA — pages/production/production.js
   Production division page: services, portfolio grid with images, CTA.
   ======================================================================== */

function ProductionPage() {
  const services = [
    { title: "Photography",             sub: "Editorial · Commercial · Product · Portrait" },
    { title: "Videography",             sub: "Brand Films · Reels · Documentaries · Events" },
    { title: "Wedding Shoots",          sub: "Pre-Wedding · Ceremony · Reception · Albums" },
    { title: "Brand Shoots",            sub: "Campaign · Lookbook · Catalog · Social" },
    { title: "Commercial Production",   sub: "TVC · OTT · Digital Ads · Corporate" },
  ];

  const portfolio = [
    {
      type: "Brand Shoot", client: "ZARA India",       year: "2024",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=75",
      imgAlt: "High-fashion brand shoot for ZARA India",
    },
    {
      type: "Wedding Film", client: "The Gupta Wedding", year: "2024",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=75",
      imgAlt: "Cinematic wedding film still — The Gupta Wedding",
    },
    {
      type: "Commercial", client: "Myntra × Campaign",  year: "2023",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=75",
      imgAlt: "Fashion editorial for Myntra campaign",
    },
    {
      type: "Photography", client: "Nykaa Beauty",       year: "2023",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=75",
      imgAlt: "Beauty product photography for Nykaa",
    },
    {
      type: "Videography", client: "Tata Motors",        year: "2024",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=75",
      imgAlt: "Automotive commercial shoot for Tata Motors",
    },
    {
      type: "Brand Shoot", client: "Tanishq Jewels",     year: "2023",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=75",
      imgAlt: "Elegant jewellery photography for Tanishq",
    },
  ];

  return `
    <div class="pt-nav">
      <!-- ── Hero ── -->
      <section class="bg-dark" style="padding:96px 24px;">
        <div class="container">
          ${Tag("Division 03")}
          <h1 class="big-title" style="margin:24px 0;">ONE RUPEE<br>PRODUCTION</h1>
          <p class="lead" style="color:rgba(255,255,255,0.6);max-width:36rem;">
            Every frame is a decision. We make them beautifully — from wedding ceremonies to national commercials.
          </p>
        </div>
      </section>

      <!-- ── Services list ── -->
      <section class="section">
        <div class="divider">
          ${services.map((s, i) => `
            <div class="prod-service-row">
              <div class="prod-service-left">
                <span class="prod-service-num">0${i + 1}</span>
                <div>
                  <div class="prod-service-title">${s.title}</div>
                  <div class="prod-service-sub">${s.sub}</div>
                </div>
              </div>
              <span class="prod-service-icon">${ICONS.camera}</span>
            </div>`).join("")}
        </div>
      </section>

      ${Divider()}

      <!-- ── Portfolio grid (with real images) ── -->
      <section class="section">
        <div class="section-flex-between">
          <h2 class="font-black" style="font-size:30px;">Selected Work</h2>
          ${Tag("2023–2024")}
        </div>
        <div class="portfolio-grid sm-grid-2 md-grid-3-portfolio">
          ${portfolio.map(p => `
            <div class="portfolio-item">
              <img src="${p.img}" alt="${p.imgAlt}" loading="lazy" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-content">
                <span class="portfolio-type">${p.type}</span>
                <div>
                  <div class="portfolio-client">${p.client}</div>
                  <div class="portfolio-year">${p.year}</div>
                </div>
              </div>
            </div>`).join("")}
        </div>
      </section>

      <!-- ── CTA ── -->
      <section class="bg-secondary" style="padding:64px 24px;text-align:center;">
        <h2 class="font-black" style="font-size:30px;margin-bottom:16px;">Book a shoot</h2>
        <p class="text-muted" style="margin-bottom:32px;">Studios in Pokhara and Kathmandu. On-location anywhere.</p>
        <button class="btn-submit-inline" data-goto="contact" style="background:var(--foreground);">
          Enquire Now ${ICONS.arrowRight}
        </button>
      </section>
    </div>
  `;
}
