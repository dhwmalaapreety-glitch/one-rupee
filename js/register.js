/* ========================================================================
   ONE RUPEE MEDIA — pages/register/register.js
   Two-step registration page.
   ======================================================================== */

function RegisterPage() {
  const r = state.register;

  const benefits = [
    "Access exclusive brand deals",
    "Connect with 200+ verified creators",
    "Join curated workshops & events",
    "Get priority production slots",
  ];

  const step1Form = `
    <form id="registerStep1" novalidate>
      <div class="field">
        <label>Full Name</label>
        <input type="text" id="r-name" value="${r.name}" placeholder="Rahul Verma" required>
      </div>
      <div class="field" style="margin-top:24px;">
        <label>Email</label>
        <input type="email" id="r-email" value="${r.email}" placeholder="you@example.com" required>
      </div>
      <div class="field" style="margin-top:24px;">
        <label>Password</label>
        <div class="password-wrap">
          <input type="${r.show ? "text" : "password"}" id="r-password" value="${r.password}" placeholder="Min. 8 characters" required>
          <button type="button" class="password-toggle" id="registerShowToggle" aria-label="Toggle password visibility">
            ${r.show ? ICONS.eyeOff : ICONS.eye}
          </button>
        </div>
      </div>
      <div class="field" style="margin-top:24px;">
        <label>Confirm Password</label>
        <input type="password" id="r-confirm" value="${r.confirm}" placeholder="••••••••" required>
      </div>
      <button type="submit" class="btn-submit">Continue ${ICONS.arrowRight}</button>
    </form>
  `;

  const types = ["Brand", "Creator", "Agency", "Individual"];

  const step2Form = `
    <form id="registerStep2" novalidate>
      <div class="field">
        <label>I am a</label>
        <div class="type-grid">
          ${types.map(t => `
            <button type="button" class="type-btn ${r.type === t ? "selected" : ""}" data-type="${t}">${t}</button>
          `).join("")}
        </div>
      </div>
      <div class="field" style="margin-top:24px;">
        <label>Interested In</label>
        <select id="r-division">
          <option value="">Select a division</option>
          <option ${r.division === "One Rupee Media"       ? "selected" : ""}>One Rupee Media</option>
          <option ${r.division === "One Rupee Podcast"     ? "selected" : ""}>One Rupee Podcast</option>
          <option ${r.division === "One Rupee Production"  ? "selected" : ""}>One Rupee Production</option>
          <option ${r.division === "One Rupee Social"      ? "selected" : ""}>One Rupee Social</option>
          <option ${r.division === "All Divisions"         ? "selected" : ""}>All Divisions</option>
        </select>
      </div>
      <label class="checkbox-row" style="margin-top:24px;">
        <input type="checkbox" required>
        <span>I agree to the Terms of Service and Privacy Policy of One Rupee.</span>
      </label>
      <div class="register-submit-row">
        <button type="button" class="register-back" id="registerBackBtn">Back</button>
        <button type="submit" class="btn-submit flex-1" style="margin-top:0;">
          Create Account ${ICONS.arrowRight}
        </button>
      </div>
    </form>
  `;

  return `
    <div class="pt-nav auth-grid">
      <!-- Left panel -->
      <div class="auth-left">
        <div class="auth-logo">ONE RUPEE</div>
        <div>
          <h2 class="auth-heading">Join the<br>Network.</h2>
          <div class="benefit-list">
            ${benefits.map(b => `
              <div class="benefit-item">
                <div class="benefit-dot"></div>
                <span>${b}</span>
              </div>`).join("")}
          </div>
        </div>
        <div class="step-bar">
          <div class="${r.step >= 1 ? "active" : ""}"></div>
          <div class="${r.step >= 2 ? "active" : ""}"></div>
        </div>
      </div>

      <!-- Right panel -->
      <div class="auth-right">
        <div class="auth-form-wrap">
          ${Tag(`Step ${r.step} of 2`)}
          <h1 class="auth-title">${r.step === 1 ? "Create Account" : "Your Profile"}</h1>
          ${r.step === 1 ? step1Form : step2Form}
          <div class="auth-footer">
            <span class="text-muted" style="font-size:14px;">Already have an account? </span>
            <button data-goto="login" style="font-size:14px;">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
