<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <div class="logo-mark">TC</div>
          <span class="logo-text">SmoothTech</span>
        </router-link>
      </div>
      <navigation />
      <div class="header-actions">
        <a href="#" class="btn-icon-only">
          <span class="icon">□</span>
        </a>
        <router-link to="/contact" class="btn-outline-small">
          Contact
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'AppHeader',
  components: {
    Navigation
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}
</script>

<style>
@import '../../assets/styles/components/AppHeader.css';
</style>