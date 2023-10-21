<script setup>
import DynamicLogo from './icons/DynamicLogo.vue'
import IconHome from './icons/IconHome.vue'
import IconAbout from './icons/IconAbout.vue'


</script>

<template>
  <div class="front_page">
    
    <div class="banner">
      <DynamicLogo />
      <div class="texts_wrapper">
        <h1>TAMS-V3</h1>
        <p>
          Unofficial<span class="red">ly</span>Redesign<span class="red">ed</span></p>
        <span class="security">
          For security concerns, redirect to
          <a class="blue" href="https://hcc-tams.com.ph/tams/App" target="_blank" rel="noopener">Tamsv2</a>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: nowrap;
  place-items: center;
  place-content: center;
  text-align: center;
}

.front_page {
  width: 100%;
  flex-direction: column;
  line-height: 1.2;
}

.banner {
  flex-direction: row;
  padding: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 0.8rem;
  background: linear-gradient(145deg, var(--color-background), var(--color-background-soft));
  box-shadow: 1rem 1rem 2rem var(--color-background-mute),
    -1rem -1rem 2rem var(--color-background-soft);
}

.texts_wrapper {
  flex-direction: column;
  padding: 0 0.3rem 0.8rem 0.45rem;
}

h1,
p {
  text-wrap: nowrap;
  text-shadow: 0.06rem 0.06rem 0.1rem var(--color-background-soft),
    -0.06rem -0.06rem 0.1rem var(--color-background-mute);
}

h1 {
  font-weight: 900;
  font-size: 2.2rem;
}

.texts_wrapper p span {
  font-family: 'Satisfy';
  font-size: 1.25rem;
  font-weight: 500;
}

.texts_wrapper p {
  color: var(--color-heading);
  font-size: 0.8rem;
  font-weight: 600;
}

.texts_wrapper span.security {
  font-style: italic;
  font-size: 0.45rem;
}

.texts_wrapper span.security a {
  font-weight: 600;
}
</style>