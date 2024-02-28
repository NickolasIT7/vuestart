<template>
  <li>
    {{ title }}
    <button :data-index="index">Удалить</button>
  </li>
</template>
<script setup lang="ts">
defineProps(['title', 'index'])


</script>