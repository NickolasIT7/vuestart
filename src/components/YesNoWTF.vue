<template>
  <div style="margin: 20px auto; max-width: 400px;">
    <input type="text" v-model="question">
    <div>{{ russianAnswer }}</div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      question: '',
      answer: 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
    }
  },
  watch: {
    // при каждом изменении `question` эта функция будет запускаться
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Думаю...'
      const resp = await fetch('https://yesno.wtf/api')
      const data = await resp.json()
      this.answer = data.answer
    }   
  },
  computed: {
    russianAnswer() {
      return this.answer == 'yes'? 'Да': this.answer == 'no' ? 'Нет' : this.answer
    }
  }
}
</script>