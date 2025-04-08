<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section brand-section">
          <div class="footer-logo">
            <div class="logo-mark">TC</div>
          </div>
          <p class="tagline">Your partner in innovative technology solutions.</p>
          <div class="social-icons">
            <a href="#" aria-label="LinkedIn" class="social-icon">
              <span class="icon">▣</span>
            </a>
            <a href="#" aria-label="Twitter" class="social-icon">
              <span class="icon">▢</span>
            </a>
            <a href="#" aria-label="GitHub" class="social-icon">
              <span class="icon">◯</span>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/find-talent">Find Talent</router-link></li>
            <li><router-link to="/find-job">Find Job</router-link></li>
            <li><router-link to="/blogs">Resources</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><router-link to="/services/consulting">Tech Consulting</router-link></li>
            <li><router-link to="/services/talent">Talent Sourcing</router-link></li>
            <li><router-link to="/services/development">Custom Development</router-link></li>
          </ul>
        </div>

        <div class="footer-section contact-section">
          <h4>Contact</h4>
          <address>
            <p class="contact-line">123 Tech Street<br>Silicon Valley, CA 94043</p>
            <p class="contact-line"><span class="label">E:</span> info@SmoothTech.com</p>
            <p class="contact-line"><span class="label">T:</span> (123) 456-7890</p>
          </address>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">&copy; {{ new Date().getFullYear() }} SmoothTech.</p>
        <div class="meta-links">
          <router-link to="/privacy">Privacy</router-link>
          <router-link to="/terms">Terms</router-link>
          <router-link to="/sitemap">Sitemap</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
@import '../../assets/styles/components/AppFooter.css';
</style>