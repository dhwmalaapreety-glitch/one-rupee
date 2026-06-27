/* ========================================================================
   ONE RUPEE MEDIA — pages/podcast/podcast.js
   Podcast division page: player widget, services, episodes.
   ======================================================================== */

function PodcastPage() {
  const episodes = [
    { ep: "EP 48", title: "Building a Brand from Zero",        guest: "Priya Sharma",  duration: "58 min"   },
    { ep: "EP 47", title: "The Creator Economy in India",      guest: "Arjun Mehta",   duration: "1h 12min" },
    { ep: "EP 46", title: "Podcasting as a Revenue Machine",   guest: "Neha Kapoor",   duration: "45 min"   },
  ];

  const services = [
    { title: "Podcast Production",      desc: "Studio recording, remote setup, editing, sound design, and episode publishing handled end-to-end." },
    { title: "Podcast Ads",             desc: "Host-read, pre-roll, mid-roll, and post-roll ad placements designed for maximum listener engagement." },
    { title: "Brand Collaborations",    desc: "Multi-episode sponsorships, integration deals, and co-branded show formats." },
    { title: "Distribution",            desc: "Publishing to Spotify, Apple Podcasts, Google Podcasts, Amazon Music, and every major platform." },
  ];

  return `
    <div class="pt-nav">
      <!-- ── Hero ── -->
      <section class="section" style="padding-top:96px;">
        <div class="grid grid-cols-1 md-grid-2" style="gap:48px;align-items:center;">
          <div>
            ${Tag("Division 02")}
            <h1 class="big-title-sm" style="margin:24px 0;">ONE RUPEE<br>PODCAST</h1>
            <p class="lead">We produce, distribute, and monetize podcasts. Your voice deserves the full infrastructure.</p>
          </div>

          <!-- Player widget -->
          <div class="player">
            <div class="player-live">
              <div class="player-dot"></div>
              <span class="font-mono" style="font-size:12px;letter-spacing:0.05em;color:rgba(255,255,255,0.6);">NOW PLAYING</span>
            </div>
            <div class="font-black" style="font-size:24px;">The One Rupee Show</div>
            <div style="font-size:14px;color:rgba(255,255,255,0.6);">Episode 48 · Building a Brand from Zero</div>
            <div class="player-bar">
              <div class="player-bar-fill"></div>
              <div class="player-bar-dot"></div>
            </div>
            <div class="player-times"><span>38:22</span><span>58:00</span></div>
            <div class="player-controls">
              <button>← 15s</button>
              <button class="player-play" aria-label="Play episode">${ICONS.play}</button>
              <button>15s →</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Podcast studio image ── -->
      <img
        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1400&auto=format&fit=crop&q=80"
        alt="Professional podcast recording studio with microphone and headphones"
        class="podcast-hero-img"
        loading="lazy"
      />

      ${Divider()}

      <!-- ── Services ── -->
      <section class="section">
        <h2 class="font-black" style="font-size:30px;margin-bottom:48px;">Services</h2>
        <div class="gap-px-bordered grid-cols-1 md-grid-2">
          ${services.map((s, i) => `
            <div style="padding:32px;">
              <div class="font-mono text-muted" style="font-size:12px;margin-bottom:12px;">0${i + 1}</div>
              <h3 class="font-black" style="font-size:20px;margin-bottom:12px;">${s.title}</h3>
              <p class="text-muted" style="font-size:14px;line-height:1.7;">${s.desc}</p>
            </div>`).join("")}
        </div>
      </section>

      ${Divider()}

      <!-- ── Episodes ── -->
      <section class="section">
        <div class="section-flex-between">
          <h2 class="font-black" style="font-size:30px;">Latest Episodes</h2>
          <span class="text-muted">${ICONS.mic}</span>
        </div>
        <div class="divider">
          ${episodes.map(e => `
            <div class="episode-row" role="button" tabindex="0" aria-label="Play ${e.title}">
              <div class="episode-left">
                <span class="episode-ep">${e.ep}</span>
                <div>
                  <div class="episode-title">${e.title}</div>
                  <div class="episode-guest">with ${e.guest}</div>
                </div>
              </div>
              <div class="episode-right">
                <span class="episode-duration">${e.duration}</span>
                <span class="text-muted">${ICONS.play}</span>
              </div>
            </div>`).join("")}
        </div>
      </section>
    </div>
  `;
}
