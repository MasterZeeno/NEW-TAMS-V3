<script setup>
import IconProfile from './icons/IconProfile.vue';
</script>
<template>
  <div class="loginbox">
    <div class="profileCircle">
      <IconProfile />
    </div>
    <form class="login-form">
      <input type="text" placeholder="Company ID" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>
<style scoped>
.loginbox,
input,
button {
  border-radius: 0.8rem;
}

.loginbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: no-wrap;
  padding: 3rem;
  margin: auto;
  width: 250px;
  background: linear-gradient(145deg, var(--color-background), var(--color-background-soft));
  box-shadow: 1rem 1rem 2rem var(--color-background-mute),
    -1rem -1rem 2rem var(--color-background-soft);
}

.profileCircle {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  box-shadow: 0.5rem 0.5rem 0.8rem var(--color-background-mute),
    -0.5rem -0.5rem 0.8rem var(--color-background-soft);
}

input,
button {
  width: 10rem;
  padding: 0.5rem;
  margin: 0.3rem 1.2rem;
  border: none;
  outline: none;
  text-align: center;
}

input {
  color: var(--hcc-blue);
  box-shadow: inset 0.06rem 0.06rem 0.1rem var(--color-background-mute), inset -0.06rem -0.06rem 0.1rem var(--color-background-soft);
}

button {
  font-weight: 600;
  color: white;
  background: var(--hcc-red);
  box-shadow: 0.1rem 0.1rem 0.5rem var(--color-background-mute),
    -0.1rem -0.1rem 0.5rem var(--color-background-soft);
}

span {
  font-weight: 800;
  font-size: 1.8rem;
  text-wrap: nowrap;
  text-shadow: 0.06rem 0.06rem 0.1rem var(--color-background-soft),
    -0.06rem -0.06rem 0.1rem var(--color-background-mute);
  padding-bottom: 1rem;
}
</style>