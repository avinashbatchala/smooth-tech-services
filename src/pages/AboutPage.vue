<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <div class="hero-content">
          <span class="hero-tag">About Us</span>
          <h1>The Team <span class="accent-text">Behind SmoothTech</span></h1>
          <p class="hero-subtitle">Learn about our mission, vision, and the people driving innovation</p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <span class="section-tag">Our Journey</span>
            <h2>From Vision to Reality</h2>
            <p class="story-text">Founded in 2010, SmoothTech began with a simple mission: to bridge the gap between
              businesses and technology talent. Our team of experts combines deep technical knowledge with business acumen to deliver
              solutions that drive growth and innovation for our clients.</p>
            <div class="mission-vision-grid">
              <div class="mission-card">
                <div class="card-icon mission-icon">
                  <span>⭐</span>
                </div>
                <h3>Our Mission</h3>
                <p>To empower businesses through technology and connect talented professionals with
                  opportunities that advance their careers.</p>
              </div>
              <div class="vision-card">
                <div class="card-icon vision-icon">
                  <span>🔭</span>
                </div>
                <h3>Our Vision</h3>
                <p>To be the most trusted partner in technology consulting and talent sourcing, known
                  for our integrity, expertise, and commitment to excellence.</p>
              </div>
            </div>
          </div>
          <div class="story-image">
            <img src="@/assets/media/pages/about/team.png" alt="SmoothTech team">
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <span class="section-tag">What Drives Us</span>
        <h2>Our Core Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon integrity">
              <span>01</span>
            </div>
            <h3>Integrity</h3>
            <p>We operate with honesty, transparency, and ethical business practices in all our
              interactions.</p>
          </div>
          <div class="value-card">
            <div class="value-icon excellence">
              <span>02</span>
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect of our work, constantly learning and
              improving our services.</p>
          </div>
          <div class="value-card">
            <div class="value-icon innovation">
              <span>03</span>
            </div>
            <h3>Innovation</h3>
            <p>We embrace change and continuously seek innovative solutions to complex problems.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <span class="section-tag">Meet Our Team</span>
        <h2>Leadership That Inspires</h2>
        <p class="section-subtitle">Our leadership team brings decades of experience in technology, business strategy, and talent development.</p>

        <div class="team-grid">
          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/media/pages/about/user.png" alt="John Doe">
            </div>
            <div class="member-info">
              <h3>John Doe</h3>
              <span class="member-role">CEO & Founder</span>
              <p class="member-bio">John brings over 20 years of experience in technology and business leadership.</p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/media/pages/about/user.png" alt="Sarah Johnson">
            </div>
            <div class="member-info">
              <h3>Sarah Johnson</h3>
              <span class="member-role">CTO</span>
              <p class="member-bio">Sarah leads our technical strategy with expertise in emerging technologies.</p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/media/pages/about/user.png" alt="Michael Chen">
            </div>
            <div class="member-info">
              <h3>Michael Chen</h3>
              <span class="member-role">Director of Talent</span>
              <p class="member-bio">Michael oversees our talent acquisition and placement programs.</p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/media/pages/about/user.png" alt="Lisa Taylor">
            </div>
            <div class="member-info">
              <h3>Lisa Taylor</h3>
              <span class="member-role">Head of Operations</span>
              <p class="member-bio">Lisa ensures smooth operations and exceptional service delivery.</p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="about-stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">12+</span>
            <span class="stat-label">Years of Excellence</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">150+</span>
            <span class="stat-label">Team Members</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5</span>
            <span class="stat-label">Global Offices</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">200+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="join-cta-section">
      <div class="container">
        <div class="cta-module">
          <h2>Join Our Growing Team</h2>
          <p>We're always on the lookout for talented individuals who are passionate about technology and innovation</p>
          <router-link to="/careers" class="btn btn-highlight">
            <span class="btn-icon">✦</span>
            View Open Positions
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/styles/pages/AboutPage.css'

export default {
  name: 'AboutPage'
}
</script>