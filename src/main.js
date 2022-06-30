
import App from './App.vue'
import './index.css'
import {apolloClient} from './apollo-client'
import {createRouter,createWebHistory} from 'vue-router'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import notfound from './screens/notfound.vue'
import landing from './screens/landing.vue'

import {extend,ValidationObserver, ValidationProvider} from 'vee-validate';



Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);




const routes = [
  { path: '/',
    name: 'landing',
   component: landing },
  {
    path: '/login',
    name: 'login',
    component: () => import('./screens/login.vue')
  },
  { path: '/addPage',
    name: 'addPage',
    component: () => import('./screens/addPage.vue') },
  { path: '/viewedit',
    name: 'viewedit',
    component: () => import('./screens/view_edit.vue') },
  { path: '/:pathMatch(.*)*',
      name: 'notfound',  
      component: notfound },
  
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})

//export default router

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
 
  render: () => h(App),
})

app.use(router).mount('#app')