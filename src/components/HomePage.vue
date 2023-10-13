<script setup lang="ts">
defineProps<{
  webAppName: string
}>()
</script>

<template>
  <div class="banner">
    <img alt="HCC" class="logo" src="@/assets/logo.svg" />
    <div class="wrapper">
      <h1 class="blue">{{ webAppName }}</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
      </h3>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.banner h1,
.banner h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .banner h1,
  .banner h3 {
    text-align: left;
  }
}
</style>
