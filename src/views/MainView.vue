<script setup lang="ts">
import TemplateButton from '@/components/TemplateButton.vue'
import CounterButton from '@/components/CounterButton.vue'
import OptionsApi from '@/components/OptionsApi.vue'
import LinksComponent from '@/components/LinksComponent.vue'
import YesNoWTF from '@/components/YesNoWTF.vue'
import ToDo from '@/components/ToDo.vue'
import { ref } from 'vue'
import { useCounter } from '@/stores/counterComposition'
import { useUser } from '@/stores/user'

const counterStore = useCounter()
const userStore = useUser()

const hide = ref(false)
const isActive = ref(false)
const activeClass = 'active'
const uppercase = 'uppercase'
const fontSize = 16
const items = ref([
  { message: 'Foo' },
  { message: 'Bar' }
])
let i = 0
const addElem = () => {
  items.value.push({ message: 'text' + i })
  i++
}
const removeElemEnd = () => {
  items.value.pop()
}
const removeElemStart = () => {
  items.value.shift()
}

</script>

<template>
  <ToDo></ToDo>
  {{ userStore.user }}
  <header>
    <LinksComponent></LinksComponent>
    <YesNoWTF></YesNoWTF>
  </header>
  <div>
    <button @click="addElem">Добавить</button>
    <button @click="removeElemEnd">Удалить с конца</button>
    <button @click="removeElemStart">Удалить с начала</button>
    <template v-for="(value, index) of items">
      <p>{{ value }} {{ index }}</p>
    </template>
  </div>
  <CounterButton v-bind:start="10" />
  <CounterButton :start="15" />
  <CounterButton style="background:yellow" />
  <CounterButton class="myButton" />
  <CounterButton />
  <CounterButton />
  <CounterButton />
  <TemplateButton><span :class="[uppercase, isActive ? activeClass : '']">Content from parent</span></TemplateButton>
  <TemplateButton></TemplateButton>
  <br>
  <template v-if="!hide">
    <OptionsApi v-on:hide="hide = true" />
    <p :style="{ color: 'red', fontSize: fontSize + 'px' }">Эта кнопка и текст исчезнут, когда счётчик достигнет 5</p>
  </template>
  <button class="uppercase" :class="{ active: isActive, isHidden: hide }" @click="hide = false">Show hidden Button</button>
  <button :class="isActive ? '' : 'nonActive'" @click="isActive = !isActive">Toggle</button>
  <div v-show="!hide">
    <div v-if="Math.random() > 0.7">
      Сейчас меня видно
    </div>
    <div v-else-if="Math.random() < 0.3">
      А теперь — нет 03
    </div>
    <div v-else>
      А теперь — нет else
    </div>
  </div>
  {{ counterStore.count }}
</template>

<style scoped>
.myButton {
  background: red;
}

.active {
  background: green;
}

.nonActive {
  background: orange;
}

.uppercase {
  text-transform: uppercase;
}

.isHidden {
  padding: 50px;
}</style>