<script setup lang="ts">
import TemplateButton from './components/TemplateButton.vue'
import CounterButton from './components/CounterButton.vue'
import OptionsApi from './components/OptionsApi.vue'
import LinksComponent from './components/LinksComponent.vue'
import YesNoWTF from './components/YesNoWTF.vue'
import {ref} from 'vue'
const hide = ref(false)
</script>

<template>
  <header>
    <LinksComponent></LinksComponent>
    <YesNoWTF></YesNoWTF>
  </header>  
  <CounterButton v-bind:start="10"/>
  <CounterButton :start="15"/>
  <CounterButton style="background:yellow"/>
  <CounterButton class="myButton"/>
  <CounterButton/>
  <CounterButton/>
  <CounterButton/>
  <TemplateButton>Content from parent</TemplateButton>
  <TemplateButton></TemplateButton>
  <br>
  <OptionsApi v-if="!hide" v-on:hide="hide=true"/>
  <button @click="hide=false">Show hidden Button</button>
</template>

<style scoped>
  .myButton {
    background:red;
  }
</style>