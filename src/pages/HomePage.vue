<template>
  <div class="home-page">
    <!-- Hero section with minimalist Teenage Engineering inspired design -->
    <section class="hero-section">
      <div id="particles-js" class="particles-container"></div>
      <div class="container">
        <div class="te-label">Innovative Tech Solutions</div>
        <h1>Connect with <span class="accent-text">Expert Talent</span></h1>
        <p>We help businesses thrive by connecting them with the right technology expertise.</p>
        <div class="button-group">
          <router-link to="/find-talent" class="btn btn-primary">Find Talent</router-link>
          <router-link to="/about" class="btn btn-secondary">Learn More</router-link>
        </div>
      </div>
    </section>

    <!-- Services section -->
    <!-- Services section with updated services -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="te-label">Our Services</div>
          <h2>How We Can <span class="accent-text">Help You</span></h2>
        </div>
        <div class="grid grid-3">
          <div class="te-card">
            <div class="te-icon icon-primary">01</div>
            <h3>IT Consulting</h3>
            <p>Strategic guidance to help your business leverage technology effectively and navigate digital transformation.</p>
            <router-link to="/find-talent" class="te-link">Learn More →</router-link>
          </div>

          <div class="te-card">
            <div class="te-icon icon-secondary">02</div>
            <h3>Web Development</h3>
            <p>Custom web applications and responsive sites built with modern frameworks and performance-focused architecture.</p>
            <router-link to="/find-talent" class="te-link">Learn More →</router-link>
          </div>

          <div class="te-card">
            <div class="te-icon icon-primary">03</div>
            <h3>Android/iOS App Development</h3>
            <p>Native and cross-platform mobile applications designed for exceptional user experience and performance.</p>
            <router-link to="/find-talent" class="te-link">Learn More →</router-link>
          </div>

          <div class="te-card">
            <div class="te-icon icon-secondary">04</div>
            <h3>Custom AI/ML Services</h3>
            <p>Intelligent solutions using machine learning and artificial intelligence to transform your business data into insights.</p>
            <router-link to="/find-talent" class="te-link">Learn More →</router-link>
          </div>

          <div class="te-card">
            <div class="te-icon icon-primary">05</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and migration services to optimize performance and reduce operational costs.</p>
            <router-link to="/find-talent" class="te-link">Learn More →</router-link>
          </div>

          <div class="te-card">
            <div class="te-icon icon-secondary">06</div>
            <h3>Data Analytics</h3>
            <p>Comprehensive data analysis and visualization tools to help you make data-driven decisions with confidence.</p>
            <router-link to="/find-talent" class="te-link">Learn More →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats section -->
    <section class="section section-light">
      <div class="container">
        <div class="grid grid-4">
          <div class="te-stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Clients Served</span>
          </div>
          <div class="te-stat">
            <span class="stat-number">1,200+</span>
            <span class="stat-label">Tech Experts</span>
          </div>
          <div class="te-stat">
            <span class="stat-number">98%</span>
            <span class="stat-label">Client Satisfaction</span>
          </div>
          <div class="te-stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial section -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="te-label">Client Success</div>
          <h2>What Our Clients <span class="accent-text">Say</span></h2>
        </div>
        <div class="te-testimonial">
          <p class="testimonial-quote">Working with this team has transformed our business. Their technology expertise has been invaluable to our growth strategy.</p>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="@/assets/media/pages/about/user.png" alt="Sarah Johnson">
            </div>
            <div>
              <p class="author-name">Sarah Johnson</p>
              <p class="author-title">CTO, Tech Innovations</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="section section-light">
      <div class="container">
        <div class="te-cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>Connect with our team of experts to achieve your technology goals.</p>
          <div class="button-group">
            <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
            <router-link to="/find-talent" class="btn btn-secondary">Find Talent</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/styles/pages/HomePage.css'

export default {
  name: 'HomePage',
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      if (!window.particlesJS) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
          this.configureParticles();
        };
        document.head.appendChild(script);
      } else {
        this.configureParticles();
      }
    },
    configureParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }
}
</script>