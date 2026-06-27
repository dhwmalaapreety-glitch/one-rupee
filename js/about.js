/* ========================================================================
   ONE RUPEE MEDIA — pages/about/about.js
   About page: story, philosophy, team, CTA.
   ======================================================================== */

function AboutPage() {
  const philosophy = [
    { title: "Authenticity Over Algorithms", desc: "Real stories beat hacks. We build brands that earn loyalty, not just clicks." },
    { title: "Creators First",               desc: "The people who make are the people who matter. We build infrastructure for them." },
    { title: "One Roof",                     desc: "Strategy, production, distribution, community — all in-house, all aligned." },
  ];

  const team = [
    {
      name: "Pradip",   role: "Founder & CEO",       since: "2022",
      img: "",
      imgAlt: "",
    },
    {
      name: "Rajan",  role: "Head of Media",        since: "2022",
      img: "",
      imgAlt: "",
    },
    {
      name: "Youbraj",   role: "Head of Production",   since: "2023",
      img: "",
      imgAlt: "",
    },
    {
      name: "Sujan",   role: "Community Lead",       since: "2023",
      img: "",
      imgAlt: "",
    },
  ];

  return `
    <div class="pt-nav">
      <!-- ── Title ── -->
      <section class="section" style="padding-top:96px;padding-bottom:0;">
        ${Tag("About Us")}
        <h1 class="big-title" style="margin-top:24px;">THE ₹1<br>STORY</h1>
      </section>

      <!-- ── About hero image ── -->
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&auto=format&fit=crop&q=80"
        alt="One Rupee Media team at their Pokhara headquarters"
        class="about-hero-img"
        loading="lazy"
        style="margin-top:48px;"
      />

      ${Divider()}

      <!-- ── Story + Philosophy ── -->
      <section class="section grid grid-cols-1 md-grid-2" style="gap:80px;">
        <div>
          <h2 class="font-black" style="font-size:24px;margin-bottom:24px;">Where It Started</h2>
          <p class="text-muted" style="line-height:1.7;margin-bottom:16px;">
            One Rupee was born from a simple belief: the best ideas don't need a big budget to begin. In 2022, we started as a two-person content studio in a Pokhara apartment with ₹1 in the kitty and an outsized ambition.
          </p>
          <p class="text-muted" style="line-height:1.7;margin-bottom:16px;">
            Today, we are a full-spectrum media company with four thriving divisions — Media, Podcast, Production, and Social — serving 500+ brands and a community of 15,000+ creators.
          </p>
          <p class="text-muted" style="line-height:1.7;">
            The rupee was symbolic. The work has always been priceless.
          </p>
        </div>
        <div>
          <h2 class="font-black" style="font-size:24px;margin-bottom:24px;">Our Philosophy</h2>
          <div class="divider">
            ${philosophy.map(p => `
              <div class="philosophy-row">
                <div class="philosophy-title">${p.title}</div>
                <div class="philosophy-desc">${p.desc}</div>
              </div>`).join("")}
          </div>
        </div>
      </section>

      ${Divider()}

      <!-- ── Team ── -->
      <section class="section">
        <div class="section-flex-between">
          <h2 class="font-black" style="font-size:30px;">The Team</h2>
          ${Tag("Pokhara HQ")}
        </div>
        <div class="grid grid-cols-1 sm-grid-2 md-grid-4" style="gap:1px;background:var(--border);">
          ${team.map(m => `
            <div class="team-card">
              <img src="${m.img}" alt="${m.imgAlt}" class="team-photo" loading="lazy" />
              <div class="team-name">${m.name}</div>
              <div class="team-role">${m.role}</div>
              <div class="team-since">Since ${m.since}</div>
            </div>`).join("")}
        </div>
      </section>

      <!-- ── CTA ── -->
      <section class="bg-dark" style="padding:80px 24px;text-align:center;">
        <h2 class="font-black" style="font-size:36px;margin-bottom:16px;">Work with us</h2>
        <p class="text-white-60" style="margin-bottom:32px;">We are always looking for talented people who believe in the power of storytelling.</p>
        <button data-goto="contact"
          style="font-size:14px;letter-spacing:0.15em;text-transform:uppercase;border:1px solid white;padding:16px 40px;transition:all .2s;"
          onmouseover="this.style.background='white';this.style.color='#252525'"
          onmouseout="this.style.background='transparent';this.style.color='white'">
          Get in Touch
        </button>
      </section>
    </div>
  `;
}
