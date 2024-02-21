<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps(['start'])
const start = props.start ? props.start : 0
const counter = ref(start)
const color = computed(()=>{
  return counter.value%2?'blue':'orange'
})
</script>

<template>
  <button :style="'color:'+ color" class="innerStyle" @click="counter++">{{ counter }}</button>
</template>

<style scoped>
.innerStyle {
  background-color: green;
}
</style>