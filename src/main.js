import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  products:[],
  weight:0,
  result:[],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
