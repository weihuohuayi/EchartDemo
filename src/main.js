import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入第三方组件组件
import echarts from 'echarts'  //引入echarts
Vue.prototype.$echarts = echarts  //挂载在原型，组件内使用直接this.$echarts调用

new Vue({
  render: h => h(App),
}).$mount('#app')
