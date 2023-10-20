<script setup lang="ts">
  import { RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginBox from './components/LoginBox.vue'
import { ref } from 'vue'

const showLogin = ref(false);

onMounted(() => {
  const isActive = document.querySelectorAll('nav a')[0];
  if (isActive && isActive.classList.contains('router-link-exact-active')) {
    showLogin.value = true;
  }
});

</script>

<template>
  <header>
    <HomePage />
  </header>
  <section>
    <LoginBox v-if="showLogin.value"></LoginBox>
    <RouterView v-else></RouterView>
  </section>
</template>

<style scoped>
  header {
    position: sticky;
    top: 0;
    padding: 1rem 0 4rem 0;
    z-index: 5;
    background: linear-gradient(var(--color-background) 90%, transparent 100%);
  }
  
  header,
  section {
    height: 100%;
    width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width));
  }
</style>