import MainView from '../views/MainView.vue'
import OptionsView from '../views/OptionsView.vue'
import CompositionView from '../views/CompositionView.vue'
import LoginView from '../views/LoginView.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/options',
    name: 'options',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OptionsView
  },
  {
    path: '/composition',
    name: 'composition',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CompositionView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView
  }
]