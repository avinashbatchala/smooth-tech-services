<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <div class="logo-mark">ST</div>
          <span class="logo-text">SmoothTech</span>
        </router-link>
      </div>

      <nav class="nav-menu" :class="{ 'active': isMenuOpen }">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/blogs" class="nav-link">Blog</router-link>
        <router-link to="/find-talent" class="nav-link">Find Talent</router-link>
        <router-link to="/find-job" class="nav-link">Find Job</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>

      <div class="header-actions">
        <a href="#" class="btn-outline-small">Log In</a>
        <router-link to="/get-started" class="btn btn-primary btn-sm">Get Started</router-link>
      </div>

      <button class="mobile-menu-button" @click="toggleMenu">
        <span class="menu-icon" :class="{ 'active': isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle('menu-open', this.isMenuOpen);
    }
  }
}
</script>

<style>
@import '../../assets/styles/components/AppHeader.css';
</style>