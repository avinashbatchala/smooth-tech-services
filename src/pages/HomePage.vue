<!-- src/pages/HomePage.vue -->
<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Innovative Tech Solutions for Your Business</h1>
          <p class="hero-subtitle">We connect businesses with exceptional tech talent and provide cutting-edge consulting services</p>
          <div class="hero-buttons">
            <router-link to="/find-talent" class="btn">Find Talent</router-link>
            <router-link to="/find-job" class="btn btn-outline">Find Job</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="grid grid-3">
          <div class="service-card">
            <div class="service-icon">
              <i class="icon-consulting"></i>
            </div>
            <h3>Tech Consulting</h3>
            <p>Expert advice on digital transformation, cloud migration, and technology strategy.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="icon-talent"></i>
            </div>
            <h3>Talent Sourcing</h3>
            <p>Connect with skilled professionals for permanent, contract, or project-based work.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="icon-development"></i>
            </div>
            <h3>Custom Development</h3>
            <p>End-to-end software development services tailored to your business needs.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-section section">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"TechConsult helped us find the perfect development team for our startup. The quality of talent and service exceeded our expectations."</p>
          </div>
          <div class="testimonial-author">
            <img src="https://via.placeholder.com/60" alt="Jane Smith" class="testimonial-avatar">
            <div>
              <h4>Jane Smith</h4>
              <p>CEO, InnovateTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to transform your business?</h2>
          <p>Get in touch with our expert team today and discover how we can help you achieve your goals.</p>
          <router-link to="/contact" class="btn btn-lg">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.9)), url('https://via.placeholder.com/1920x600') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.services-section {
  background-color: var(--color-light);
}

.service-card {
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.service-icon {
  background-color: var(--color-primary);
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
}

.testimonial {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-content {
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.testimonial-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.cta-section {
  background-color: var(--color-primary);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
</style>