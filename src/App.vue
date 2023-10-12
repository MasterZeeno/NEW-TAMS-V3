<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <HomePage webAppName="HCC TAMS-V3" />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 1.5;
  max-height: 100vh;
  padding: 0 2rem;
  margin: auto;
}

main,
.main {
  margin: auto;
  padding: 0 2rem;
  width: clamp(var(--hcc-min-width), 80vw, calc(var(--hcc-min-width) * 1.5));
}

nav {
  font-size: 0.8rem;
  text-align: center;
  margin: 2rem;
}

nav a {
  color: var(--hcc-anchor);
  opacity: 0.6;
}

nav a.router-link-exact-active {
  font-weight: 700;
  opacity: 1;
}

nav a.router-link-exact-active:hover {
  font-weight: 800;
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: calc(var(--hcc-min-width)*2)) {
  /* header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    padding-right: var(--section-gap);
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
