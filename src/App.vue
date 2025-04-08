<!-- src/App.vue -->
<template>
  <div class="app">
    <app-header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/main.css';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

main {
  min-height: calc(100vh - 140px);
  padding: 2rem 0;
}
</style>