import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/dist/antd'
import router from './router/index'
import '@/styles/global.less'
import 'ant-design-vue/dist/antd.css'
import './mock/index.js'
import request from '@/api/request'
import apis from '@/api/apis/index.js'

Vue.prototype.$apis = apis
Vue.prototype.$request = request
Vue.config.productionTip = false
// 挂载到vue中
Vue.use(Antd) 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
