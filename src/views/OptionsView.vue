<template>
    <C1></C1>{{ counter0Store.doubleCount }}
    <button @click="counter0Store.increment">{{ counter0Store.count }}</button> {{ text }}
  </template>
  
  <script lang="ts">
  import C1 from '@/components/CounterButton.vue'
  import { useCounter } from '@/stores/counterComposition'
  import { mapStores } from 'pinia'
  export default {
    components: { C1 },
    data() {
      return {
        // все реактивные переменные, которые нужны в компоненте
        // count: 0
      }
    },
    methods:{ 
      // increment() {
      //   // все методы компонента
      //   this.count ++
      // }
    },
    computed: {
      ...mapStores(useCounter),
      text() {
        return this.counter0Store.count ?'':'Нажми на серую кнопку'
      },
    }, 
    watch: {
      count(next,prev) {
        console.log(next, prev)
      }
    },
    beforeCreate() {
      // console.log('bC', Date.now())
    },
    created() {
      // console.log('C', Date.now())
    },
    beforeMount() {
      // console.log('bM', Date.now())
    },
    mounted() {
      // console.log('M', Date.now())
    },
    beforeUpdate() {
      // console.log('bUpd', Date.now())
    },
    updated() {
      // console.log('Upd', Date.now())
    },
    beforeUnmount() {
      // console.log('bUnm', Date.now())
    },
    unmounted() {
      // console.log('Unm', Date.now())
    }
  }
  </script>
  
  
  <style scoped></style>