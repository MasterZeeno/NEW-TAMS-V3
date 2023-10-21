<script setup>
import { RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const isActive = ref(true)

const classObject = computed(() => ({
  active: isActive.value
}))

const classObject2 = computed(() => ({
  active: !isActive.value
}))

function toggleActive(event) {
  if (event) {
    if (!event.target.classList.contains(isActive.value.toString())) {
      isActive.value = !isActive.value
    }
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink @click="toggleActive" :class="classObject" id="homeLink" to="/">
        <IconHome />
      </RouterLink>
      <RouterLink @click="toggleActive" :class="classObject2" id="idLink" to="/about">
        <IconAbout />
      </RouterLink>
    </nav>
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
  background: linear-gradient(var(--color-background) 90%, transparent 100%);
  padding-bottom: 4rem;
}

nav,
nav a {
  display: flex;
  flex-wrap: nowrap;
  place-items: center;
  place-content: center;
  text-align: center;
  flex-direction: row;
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


/* header {
  width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width)-100px);
} */

header,
section {

  width: clamp(var(--hcc-min-width), 80vw, var(--hcc-split-width));
}
</style>