<template>
    <CounterButton></CounterButton> {{ counterStore.doubleCount }}
    <button @click="counterStore.increment">{{ counterStore.count }}</button>{{ text }}
  </template>
  
  <script setup lang="ts">
  import CounterButton from '@/components/CounterButton.vue'
  import { ref, computed, watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  import { useCounter } from '@/stores/counterComposition'
  const counterStore = useCounter()
  
  // const count = ref(0)
  // const increment = ()=>{
  //   count.value++
  // }
  const text = computed(()=>{
    return counterStore.count?'':'Нажми на серую кнопку'
  })
  watch(() => counterStore.count, (next, prev)=>{
    console.log(next, prev)
  })
  onBeforeMount(()=>{
    // console.log('bM', Date.now())
  })
  onMounted(()=>{
    // console.log('M', Date.now())
  })
  onBeforeUpdate(()=>{
    // console.log('bUpd', Date.now())
  })
  onUpdated(()=>{
    // console.log('Upd', Date.now())
  })
  onBeforeUnmount(()=>{
    // console.log('bUnm', Date.now())
  })
  onUnmounted(()=>{
    // console.log('Unm', Date.now())
  })
  </script>
  
  
  <style scoped>
  
  </style>