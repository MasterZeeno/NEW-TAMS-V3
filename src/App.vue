<script setup>
import { RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'

</script>

<template>
  <header>
    <HomePage />
  </header>
  <section>

    <RouterView></RouterView>
  </section>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  padding-bottom: 2rem;
  z-index: 5;
}

/* header {
  width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width)-100px);
} */

header,
section {

  width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width));
}
</style>