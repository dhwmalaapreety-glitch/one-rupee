/* ========================================================================
   ONE RUPEE MEDIA — pages/login/login.js
   Login page: two-column auth layout.
   ======================================================================== */

function LoginPage() {
  const l = state.login;

  return `
    <div class="pt-nav auth-grid">
      <!-- Left panel -->
      <div class="auth-left">
        <div class="auth-logo">ONE RUPEE</div>
        <div>
          <h2 class="auth-heading">Welcome<br>Back.</h2>
          <p class="auth-sub">Access your dashboard, manage campaigns, and track your creative ecosystem.</p>
        </div>
        <div class="auth-tags">
          <span>MEDIA</span><span>PODCAST</span><span>PRODUCTION</span><span>SOCIAL</span>
        </div>
      </div>

      <!-- Right panel -->
      <div class="auth-right">
        <div class="auth-form-wrap">
          ${Tag("Member Login")}
          <h1 class="auth-title">Sign In</h1>

          <form id="loginForm" novalidate>
            <div class="field">
              <label>Email</label>
              <input type="email" id="l-email" placeholder="you@example.com" value="${l.email}" required>
            </div>
            <div class="field" style="margin-top:24px;">
              <label>Password</label>
              <div class="password-wrap">
                <input type="${l.show ? "text" : "password"}" id="l-password" placeholder="••••••••" value="${l.password}" required>
                <button type="button" class="password-toggle" id="loginShowToggle" aria-label="Toggle password visibility">
                  ${l.show ? ICONS.eyeOff : ICONS.eye}
                </button>
              </div>
            </div>

            <div class="remember-row" style="margin-top:24px;">
              <label><input type="checkbox"> <span>Remember me</span></label>
              <button type="button" class="forgot-link">Forgot password?</button>
            </div>

            <button type="submit" class="btn-submit">Sign In ${ICONS.arrowRight}</button>
          </form>

          <div class="auth-footer">
            <span class="text-muted" style="font-size:14px;">Not a member yet? </span>
            <button data-goto="register" style="font-size:14px;">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
