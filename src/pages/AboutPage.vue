<!-- src/pages/AboutPage.vue -->
<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team behind TechConsult</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2>Our Story</h2>
            <p>Founded in 2010, TechConsult began with a simple mission: to bridge the gap between businesses and technology talent. Over the years, we've grown from a small startup to an industry leader in tech consulting and talent acquisition.</p>
            <p>Our team of experts combines deep technical knowledge with business acumen to deliver solutions that drive growth and innovation for our clients.</p>

            <h2 class="mt-5">Our Mission</h2>
            <p>To empower businesses through technology and connect talented professionals with opportunities that advance their careers.</p>

            <h2 class="mt-5">Our Vision</h2>
            <p>To be the most trusted partner in technology consulting and talent sourcing, known for our integrity, expertise, and commitment to excellence.</p>
          </div>
          <div class="about-image">
            <img src="https://via.placeholder.com/600x700" alt="TechConsult team">
          </div>
        </div>
      </div>
    </section>

    <section class="section values-section">
      <div class="container">
        <h2 class="section-title">Our Core Values</h2>
        <div class="grid grid-3">
          <div class="value-card">
            <div class="value-icon">
              <i class="icon-integrity"></i>
            </div>
            <h3>Integrity</h3>
            <p>We operate with honesty, transparency, and ethical business practices in all our interactions.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <i class="icon-excellence"></i>
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect of our work, constantly learning and improving our services.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <i class="icon-innovation"></i>
            </div>
            <h3>Innovation</h3>
            <p>We embrace change and continuously seek innovative solutions to complex problems.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section team-section">
      <div class="container">
        <h2 class="section-title">Meet Our Leadership Team</h2>
        <div class="grid grid-4">
          <div class="team-member">
            <img src="https://via.placeholder.com/300x300" alt="John Doe" class="team-photo">
            <h3>John Doe</h3>
            <p class="team-title">CEO & Founder</p>
            <p class="team-bio">John brings over 20 years of experience in technology and business leadership.</p>
          </div>
          <div class="team-member">
            <img src="https://via.placeholder.com/300x300" alt="Sarah Johnson" class="team-photo">
            <h3>Sarah Johnson</h3>
            <p class="team-title">CTO</p>
            <p class="team-bio">Sarah leads our technical strategy with expertise in emerging technologies.</p>
          </div>
          <div class="team-member">
            <img src="https://via.placeholder.com/300x300" alt="Michael Chen" class="team-photo">
            <h3>Michael Chen</h3>
            <p class="team-title">Director of Talent</p>
            <p class="team-bio">Michael oversees our talent acquisition and placement programs.</p>
          </div>
          <div class="team-member">
            <img src="https://via.placeholder.com/300x300" alt="Lisa Taylor" class="team-photo">
            <h3>Lisa Taylor</h3>
            <p class="team-title">Head of Operations</p>
            <p class="team-bio">Lisa ensures smooth operations and exceptional service delivery.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <Banner type="info">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals to join our growing team.</p>
          <router-link to="/careers" class="btn mt-3">View Open Positions</router-link>
        </Banner>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue';

export default {
  name: 'AboutPage',
  components: {
    Banner
  }
}
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  align-items: center;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

.values-section {
  background-color: var(--color-light);
}

.value-card {
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow-sm);
  height: 100%;
}

.value-icon {
  background-color: var(--color-primary);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
}

.team-member {
  text-align: center;
}

.team-photo {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.team-title {
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.team-bio {
  font-size: 0.9rem;
}

.cta-section {
  padding-bottom: 4rem;
}
</style>