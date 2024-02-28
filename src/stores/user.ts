import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import md5 from 'md5'
import axios from 'axios'

export const useUser = defineStore('user', () => {
  
  const user = ref({})
  
  async function checkUser() {
    const resp = await fetch("http://localhost:3001/check_user", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: +localStorage.id,
        uuid: localStorage.uuid
      })
    })
    const data = await resp.json()
    // console.log(data.data)
    if (!data.data) {
      localStorage.removeItem('id')
      localStorage.removeItem('uuid')
      location.replace('/login')
    } else {
      user.value = data.data
    }
  }

  async function loginFunc(mail: string, pass: string, pass2: string, action: string) {
    if (!mail) {
      alert('input mail')
      return
    }
    if (!pass) {
      alert('input pass')
      return
    }
    try {
      if (action == 'login') {
        const resp = await axios.post('http://localhost:3001/login', {
          email: mail,
          hash: md5(pass).toString()
        })
        console.log(resp)
        if (!resp.data) {
          alert('check mail and pass')
          return
        }
        user.value = resp.data.data
        localStorage.id = resp.data.data.id
        localStorage.uuid = resp.data.data.uuid
      } else {
        if (pass != pass2) {
          alert('pass not eqals')
          return
        }
        const data = await axios.post('http://localhost:3001/create_user', {
          email: mail,
          hash: md5(pass).toString()
        })
        console.log(data)
        user.value = data.data
        localStorage.id = data.data.id
        localStorage.uuid = data.data.uuid
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { user, loginFunc, checkUser }
})