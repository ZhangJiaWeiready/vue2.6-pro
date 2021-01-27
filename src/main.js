import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/dist/antd'
import router from './router/index'
import './style/global.less'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
// 挂载到vue中
Vue.use(Antd) 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
