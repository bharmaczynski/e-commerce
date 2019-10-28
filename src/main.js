import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import '@/assets/global.scss'

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})
