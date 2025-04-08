<!-- src/components/layout/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>TechConsult</h3>
          <p>Your partner in innovative technology solutions.</p>
          <div class="social-icons">
            <a href="#" aria-label="LinkedIn"><i class="icon-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/find-talent">Find a Talent</router-link></li>
            <li><router-link to="/find-job">Find a Job</router-link></li>
            <li><router-link to="/blogs">Blogs</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <address>
            <p>123 Tech Street<br>Silicon Valley, CA 94043</p>
            <p>Email: info@techconsult.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} TechConsult. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: var(--color-secondary);
  color: white;
  padding: 3rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer h3 {
  margin-top: 0;
  font-size: 1.5rem;
}

.footer h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer li {
  margin-bottom: 0.5rem;
}

.footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s;
}

.footer a:hover {
  color: var(--color-accent);
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s;
}

.social-icons a:hover {
  background-color: var(--color-accent);
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

address {
  font-style: normal;
  line-height: 1.6;
}
</style>