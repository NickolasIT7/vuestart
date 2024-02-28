<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUser } from '@/stores/user'
const userStore = useUser()

if (location.pathname != '/login') {
  if (!localStorage.id || localStorage.id == 'undefined' || !localStorage.uuid || localStorage.uuid == 'undefined') {
    location.replace('/login')
  } else {
    // console.log('check')
    userStore.checkUser()
  }
}
</script>

<template>
  <nav>
  <RouterLink class="link" to="/">Home</RouterLink>
  <RouterLink class="link" to="options">options</RouterLink>
  <RouterLink class="link" to="/composition">composition</RouterLink>
  </nav>
  <RouterView></RouterView>
  <footer>
    @copyrighth-2024
  </footer>
</template>

<style>
  .link {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
  }
</style>