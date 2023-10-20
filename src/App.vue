<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginBox from './components/LoginBox.vue'
import { ref, watchEffect } from 'vue'

const showLogin = ref(false);

watchEffect(() => {
  const isActive = document.querySelector('#homeLink')
  const logged = false
  showLogin.value = (logged && isActive && isActive.classList.contains('router-link-exact-active'))
  console.log(isActive)
})

</script>

<template>
  <header>
    <HomePage />
  </header>
  <section>
    <LoginBox v-if='showLogin.value'></LoginBox>
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

header {
  width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width)-100px);
}

section {
  width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width));
}
</style>