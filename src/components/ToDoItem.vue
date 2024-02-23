
<template>

    <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Добавить задачу</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="Например, покормить кота"
      />
      <button>Добавить</button>
    </form>
    <ul ref="list">
      <transition-group name="list" tag="li">
        <ToDoItem
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          :index="index"
        ></ToDoItem>
      </transition-group>
    </ul>
  </div>
  </template>
  
  <script setup lang="ts">
  import ToDoItem from './ToDoItem.vue'
  import {ref,onMounted, onBeforeUnmount} from 'vue'
  const list = ref(null)
  
  const newTodoText = ref('')
  const todos = ref ([
      {
        id: 1,
        title: 'Do the dishes'
      },
      {
        id: 2,
        title: 'Take out the trash'
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ]) as any
  const nextTodoId = ref(4)
  
  const addNewTodo = ()=>{
    todos.value.push({
      id: nextTodoId.value++,
      title: newTodoText.value
    })
    newTodoText.value = ''
  }
  
  const eventFunc = (e:MouseEvent)=>{
    const target = e.target as HTMLElement
    if (target.tagName == 'BUTTON') {
      if (target.dataset.index) todos.value.splice(+target.dataset.index, 1)
    }
  }
  
  onMounted(()=>{
    console.log(list.value)
    const UL = list.value as never as HTMLUListElement
    UL.addEventListener('click', eventFunc)
  })
  
  onBeforeUnmount(()=>{
    const UL = list.value as never as HTMLUListElement
    UL.removeEventListener('click', eventFunc)
  })
  
  </script>
  
  <style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translate(100px, 100px) rotate(90deg);
  }
  </style>