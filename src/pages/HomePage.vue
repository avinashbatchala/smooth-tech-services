<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="gradient-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <div class="welcome-card">
            <span class="tag-label">Welcome</span>
            <h1>Tech Solutions <span class="accent-text">That Inspire</span></h1>
            <p class="hero-subtitle">Connecting visionaries with exceptional tech talent</p>
            <div class="action-buttons">
              <router-link to="/find-talent" class="btn btn-primary">
                <span class="btn-icon">●</span>
                Discover Talent
              </router-link>
              <router-link to="/find-job" class="btn btn-secondary">
                <span class="btn-icon">○</span>
                Start Creating
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <span class="section-tag">Our offerings</span>
        <h2>How can we help you?</h2>

        <div class="services-grid">
          <div class="service-module">
            <div class="service-icon consulting">
              <span>01</span>
            </div>
            <h3>Tech Consulting</h3>
            <p>Strategic advice on digital transformation and technology implementation</p>
            <router-link to="/services/consulting" class="link-forward">
              Explore
              <span class="arrow">→</span>
            </router-link>
          </div>

          <div class="service-module">
            <div class="service-icon talent">
              <span>02</span>
            </div>
            <h3>Talent Sourcing</h3>
            <p>Connect with skilled professionals for your next breakthrough project</p>
            <router-link to="/services/talent" class="link-forward">
              Explore
              <span class="arrow">→</span>
            </router-link>
          </div>

          <div class="service-module">
            <div class="service-icon development">
              <span>03</span>
            </div>
            <h3>Custom Development</h3>
            <p>Tailored software solutions engineered to solve your specific challenges</p>
            <router-link to="/services/development" class="link-forward">
              Explore
              <span class="arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="container">
        <div class="testimonial-module">
          <span class="section-tag">What people say</span>
          <h2>Client Feedback</h2>
          <div class="quote-panel">
            <div class="quote-content">
              <p>"SmoothTech helped us find the perfect development team. Their talent selection process is unmatched."</p>
              <div class="author-info">
                <div class="author-image">
                  <img src="https://via.placeholder.com/60" alt="Jane Smith">
                </div>
                <div class="author-details">
                  <h4>Jane Smith</h4>
                  <p>CEO, InnovateTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-module">
          <h2>Ready to transform your tech approach?</h2>
          <p>Our team is ready to help you navigate the next steps</p>
          <router-link to="/contact" class="btn btn-highlight">
            <span class="btn-icon">◆</span>
            Let's Talk
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/styles/pages/HomePage.css'
export default {
  name: 'HomePage'
}
</script>