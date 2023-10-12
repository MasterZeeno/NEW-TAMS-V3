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
      <h4>Time Attendance Management System</h4>
      <h5>
        Unofficial Redesigned Website of
        <a href="https://hcc-tams.com.ph/tams/App" target="_blank" rel="noopener">TAMS-V2</a>.
      </h5>
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  flex-wrap: nowrap;
  place-content: center;
  width: var(--hcc-min-width);
}

.wrapper {
  width: max-content;
  text-align: center;
  margin: 0.2rem 0 0.2rem 0;
}

.logo {
  display: block;
}

h1 {
  font-weight: 800;
  font-size: 2rem;
}

h4 {
  font-size: 0.8rem;
  font-weight: 500;
}

h5 {
  font-size: 0.7rem;
}

@media (min-width: 1024px) {
}
</style>
