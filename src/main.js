import Vue from 'vue'
import App from './App.vue'
import dateFilter from '@/filters/date.filter'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  render: h => h(App),
}).$mount('#app')
