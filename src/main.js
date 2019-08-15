import Vue from 'vue'
import App from './app.vue'
import router from './router'
// import 'vue-simple-scrollbar/dist/vue-simple-scrollbar.css'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
