<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <header>
      <HomePage webAppName="TAMS-V3" />
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  
  nav {
    display: sticky;
    top: 50px;
    width: 100%;
    height: 50px;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
  
  nav a {
  color: var(--color-border);
}
  
  nav a.router-link-exact-active {
    color: var(--hcc-anchor);
  }
  
  nav a.router-link-exact-active:hover {
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
  
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
    
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>