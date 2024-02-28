<template>
    <form @submit.prevent="userStore.loginFunc(mail, pass, pass2, action)">
        <div style="text-align: center;">
          <button id="login" @click.prevent="loginClick">login</button>
          <button id="reg" @click.prevent="regClick">registration</button>
        </div>
        <input id="mail" type="mail" v-model="mail" placeholder="mail">
        <input id="pass" type="password" v-model="pass" placeholder="pass">
        <input v-if="action=='reg'" id="pass2" type="password"  v-model="pass2" placeholder="retype pass">
        <br>
        <input id="submit" type="submit" @click.prevent="userStore.loginFunc(mail, pass, pass2, action)" :value="submitVal">
      </form>
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  import { useUser } from '@/stores/user'
  const userStore = useUser()
  const mail = ref('')
  const pass = ref('')
  const pass2 = ref('')
  const action = ref('login')
  const submitVal = ref('Log In')
  
  const loginClick = () => {
    action.value = 'login'
    actionChange()
  }
  const regClick = () => {
    action.value = 'reg'
    actionChange()
  }
  
  function actionChange() {
    if (action.value == 'login') {
      submitVal.value = 'Log In'
    } else {
      submitVal.value = 'Register'
    }
  }
  
  </script>
  
  <style scoped>
  body {
    margin: 0 auto;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100vh;
    max-width: 300px;
    background-color: antiquewhite;
  }
  </style>