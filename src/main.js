import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UUID from 'vue-uuid'
import Multiselect from 'vue-multiselect'

Vue.use(UUID)
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
