<!-- src/components/layout/AppHeader.vue -->
<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <h1>TechConsult</h1>
        </router-link>
      </div>
      <navigation />
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'AppHeader',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  text-decoration: none;
  color: white;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
}
</style>