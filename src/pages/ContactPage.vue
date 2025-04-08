<!-- src/pages/ContactPage.vue -->
<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Have a question or want to discuss your needs? Reach out to our team.</p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-container">
            <h2>Send Us a Message</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    required
                >
                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    required
                >
                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number (optional)</label>
                <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <select
                    id="subject"
                    v-model="form.subject"
                    class="form-control"
                    :class="{ 'is-invalid': errors.subject }"
                    required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Talent Request">Talent Request</option>
                  <option value="Job Application">Job Application</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Other">Other</option>
                </select>
                <div v-if="errors.subject" class="invalid-feedback">{{ errors.subject }}</div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    v-model="form.message"
                    class="form-control"
                    :class="{ 'is-invalid': errors.message }"
                    rows="5"
                    required
                ></textarea>
                <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
              </div>

              <div class="form-group form-check">
                <input
                    type="checkbox"
                    id="privacy"
                    v-model="form.privacy"
                    class="form-check-input"
                    :class="{ 'is-invalid': errors.privacy }"
                    required
                >
                <label class="form-check-label" for="privacy">
                  I agree to the <router-link to="/privacy">Privacy Policy</router-link>
                </label>
                <div v-if="errors.privacy" class="invalid-feedback">{{ errors.privacy }}</div>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <Banner v-if="formSuccess" type="success" class="mt-4">
              <p class="mb-0">Your message has been sent successfully! We'll get back to you soon.</p>
            </Banner>
          </div>

          <div class="contact-info">
            <h2>Get in Touch</h2>

            <div class="info-card">
              <div class="info-icon">
                <i class="icon-location"></i>
              </div>
              <div class="info-content">
                <h3>Our Office</h3>
                <p>123 Tech Avenue</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="icon-phone"></i>
              </div>
              <div class="info-content">
                <h3>Phone</h3>
                <p><a href="tel:+14155550123">(415) 555-0123</a></p>
                <p>Monday-Friday, 9am-6pm PT</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="icon-email"></i>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p><a href="mailto:info@SmoothTech.com">info@SmoothTech.com</a></p>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>

            <div class="social-media">
              <h3>Connect With Us</h3>
              <div class="social-icons">
                <a href="#" aria-label="LinkedIn"><i class="icon-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
                <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section map-section">
      <div class="map-container">
        <!-- Placeholder for map -->
        <img src="https://via.placeholder.com/1200x400" alt="Office location map" class="location-map">
      </div>
    </section>

    <section class="section faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faqs">
          <div class="faq-item">
            <h3>How quickly can you provide talent for our project?</h3>
            <p>Typically, we can match you with qualified candidates within 48-72 hours, depending on the specificity of your requirements.</p>
          </div>
          <div class="faq-item">
            <h3>What industries do you specialize in?</h3>
            <p>While we work across various sectors, we have deep expertise in fintech, healthcare, e-commerce, and SaaS companies.</p>
          </div>
          <div class="faq-item">
            <h3>Do you offer remote talent?</h3>
            <p>Yes, we have a global network of remote professionals and can match you with talent that fits your timezone and collaboration needs.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import '@/assets/styles/pages/ContactPage.css'

export default {
  name: 'ContactPage',
  components: {
    Banner
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      },
      errors: {},
      isSubmitting: false,
      formSuccess: false
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name.trim()) {
        this.errors.name = 'Full name is required';
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Email address is required';
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
      }

      if (!this.form.subject) {
        this.errors.subject = 'Please select a subject';
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required';
      }

      if (!this.form.privacy) {
        this.errors.privacy = 'You must agree to the Privacy Policy';
      }

      return Object.keys(this.errors).length === 0;
    },

    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        // Simulate API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Form submitted:', this.form);

        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          privacy: false
        };

        this.formSuccess = true;

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);

      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>
