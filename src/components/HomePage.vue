<script setup lang="ts">
import DynamicLogo from './icons/DynamicLogo.vue'
import IconHome from './icons/IconHome.vue'
import IconAbout from './icons/IconAbout.vue'
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const isActive = ref(true)

const classObject = computed(() => ({
  active: isActive.value
}))

const classObject2 = computed(() => ({
  active: !isActive.value
}))

function toggleActive(event: any) {
  if (event) {
    if (!event.target.classList.contains(isActive.value.toString())) {
      isActive.value = !isActive.value
    }
  }
}

</script>

<template>
  <div class="front_page">
    <nav>
      <RouterLink @click="toggleActive" :class="classObject" id="homeLink" to="/">
        <IconHome />
      </RouterLink>
      <RouterLink @click="toggleActive" :class="classObject2" id="idLink" to="/about">
        <IconAbout />
      </RouterLink>
    </nav>
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
div,
nav,
nav a {
  display: flex;
  flex-wrap: nowrap;
  place-items: center;
  place-content: center;
  text-align: center;
}

.front_page {
  flex-direction: column;
  line-height: 1.2;
}

nav {
  line-height: normal;
  font-size: 0.85rem;
  padding: 2.5rem;
}

nav a {
  color: var(--color-text);
  margin: 0 0.6rem;
  border-left: 1px solid var(--color-text);
}

nav a,
nav a svg {
  opacity: 0.5;
}

nav a:first-of-type {
  border: 0;
}

nav a.active {
  color: var(--color-heading);
  font-weight: 600;
}

nav a.active,
nav a.active svg {
  opacity: 1;
}

nav a.active:hover {
  background-color: transparent;
}

.banner,
nav {
  flex-direction: row;
}

.banner {
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  background-image: linear-gradient(145deg, hsla(var(--color-background-mute), 0.6), hsla(var(--color-background-soft), 0.6));
  box-shadow: 1rem 1rem 2rem var(--color-background-mute),
    -1rem -1rem 2rem var(--color-background-soft);
}

.texts_wrapper {
  flex-direction: column;
  padding: 0 0.4rem 0.6rem 0.55rem;
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