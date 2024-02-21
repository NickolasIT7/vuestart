<template>
  <button @click="increment" @mouseover="sayHi">{{ count }}</button>  
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(e:MouseEvent) {
      this.count++
      if (this.count == 5) {
        this.$emit('hide')
      }
    },
    sayHi() {
      console.log('Hi from button')
    }
  },
  computed: {
    color() {
      return this.count % 2 ? 'blue' : 'orange'
    }
  },
  beforeCreate() {
    console.log('bC', Date.now())
  },
  created() {
    console.log('C', Date.now())
  },
  beforeMount() {
    console.log('bM', Date.now())
  },
  mounted() {
    console.log('M', Date.now())
  },
  beforeUpdate() {
    console.log('bUpd', Date.now())
  },
  updated() {
    console.log('Upd', Date.now())
  },
  beforeUnmount() {
    console.log('bUnm', Date.now())
  },
  unmounted() {
    console.log('Unm', Date.now())
  }
}
</script>