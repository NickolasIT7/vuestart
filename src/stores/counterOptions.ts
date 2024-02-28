import { defineStore } from 'pinia'

export const useCounter = defineStore('counter1', {
  state: () => ({ 
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  // getters: {
  //   doubleCount():number {
  //     return this.count*2
  //   },
  //   text():string {
  //     return this.count ? '' : 'Нажми на серую кнопку'
  //   }
  // }
})