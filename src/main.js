import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

// element ui
import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
