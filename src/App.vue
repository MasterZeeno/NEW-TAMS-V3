<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginBox from './components/LoginBox.vue'
import { ref, provide } from 'vue'

const childIsActive = ref(true)
provide('childIsActive', childIsActive)

console.log(childIsActive.value)

</script>

<template>
  <header>
    <HomePage />
  </header>
  <section>
    <LoginBox v-if='childIsActive'></LoginBox>
    <RouterView v-else></RouterView>
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