/* ========================================================================
   ONE RUPEE MEDIA — pages/contact/contact.js
   Contact page: form, contact details, map embed.
   ======================================================================== */

function ContactPage() {
  const c = state.contact;

  const formHtml = c.sent
    ? `<div class="sent-box">
         <div class="sent-title">Message Sent</div>
         <p class="text-muted">We will get back to you within 24 hours.</p>
       </div>`
    : `<form id="contactForm">
        <div class="field">
          <label>Full Name</label>
          <input type="text" id="c-name" value="${c.name}" placeholder="Your name" required>
        </div>
        <div class="field" style="margin-top:24px;">
          <label>Email Address</label>
          <input type="email" id="c-email" value="${c.email}" placeholder="you@example.com" required>
        </div>
        <div class="field" style="margin-top:24px;">
          <label>Company / Brand</label>
          <input type="text" id="c-company" value="${c.company}" placeholder="Your company" required>
        </div>
        <div class="field" style="margin-top:24px;">
          <label>Division</label>
          <select id="c-service">
            <option value="">Select a division</option>
            <option ${ c.service === "One Rupee Media"       ? "selected" : ""}>One Rupee Media</option>
            <option ${ c.service === "One Rupee Podcast"     ? "selected" : ""}>One Rupee Podcast</option>
            <option ${ c.service === "One Rupee Production"  ? "selected" : ""}>One Rupee Production</option>
            <option ${ c.service === "One Rupee Social"      ? "selected" : ""}>One Rupee Social</option>
          </select>
        </div>
        <div class="field" style="margin-top:24px;">
          <label>Message</label>
          <textarea id="c-message" rows="4" placeholder="Tell us about your project..." required>${c.message}</textarea>
        </div>
        <button type="submit" class="btn-submit-inline" style="background:var(--foreground);margin-top:24px;">
          Send Message ${ICONS.arrowRight}
        </button>
      </form>`;

  return `
    <div class="pt-nav">
      <section class="section" style="padding-top:96px;">
        ${Tag("Get In Touch")}
        <h1 class="big-title-sm" style="margin:24px 0 48px;">LET'S TALK</h1>

        <div class="contact-grid">
          <!-- Form column -->
          <div>${formHtml}</div>

          <!-- Info column -->
          <div class="contact-info-block">
            <div>
              <h3 class="font-black" style="font-size:20px;margin-bottom:24px;">Contact Details</h3>
              <div style="display:flex;flex-direction:column;gap:20px;">
                <div class="contact-detail-row">
                  <span class="text-muted" style="margin-top:2px;">${ICONS.mail}</span>
                  <span>hello@onerupee.in</span>
                </div>
                <div class="contact-detail-row">
                  <span class="text-muted" style="margin-top:2px;">${ICONS.phone}</span>
                  <span>+91 98765 43210</span>
                </div>
                <div class="contact-detail-row">
                  <span class="text-muted" style="margin-top:2px;">${ICONS.mapPin}</span>
                  <span>Pokhara, Gandaki Province, Nepal</span>
                </div>
              </div>
            </div>

            <!-- Map -->
            <iframe
              class="map-embed"
              src="https://maps.google.com/maps?q=One+Rupee+Production+Pokhara+Nepal&output=embed"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              title="One Rupee Production location in Pokhara, Nepal"
            ></iframe>

            <div>
              <h3 class="font-black" style="font-size:20px;margin-bottom:24px;">Follow Us</h3>
              <div class="contact-social">
                <button aria-label="Instagram" onclick="window.open('https://instagram.com', '_blank')">${ICONS.instagram}</button>
                <button aria-label="YouTube" onclick="window.open('https://youtube.com', '_blank')">${ICONS.youtube}</button>
                <button aria-label="Twitter/X" onclick="window.open('https://twitter.com', '_blank')">${ICONS.twitter}</button>
                <button aria-label="LinkedIn" onclick="window.open('https://linkedin.com', '_blank')">${ICONS.linkedin}</button>
              </div>
            </div>

            <div class="response-box">
              <div class="response-box-label">RESPONSE TIME</div>
              <div class="response-box-value">Within 24 hours</div>
              <div class="text-muted" style="font-size:14px;margin-top:8px;">Mon – Sat, 10am – 7pm IST</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
