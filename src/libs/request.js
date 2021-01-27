/*
 * @Author: zhangjiawei
 * @Date: 2021-01-27 20:45:20
 * 封装axios
 *  封装请求参数，请求头，以及错误提示信息、request拦截器、response拦截器、统一得错误处理、baseUrl设置
 */
import axios from 'axios'
import get from 'lodash/get'
// 本地存储 localStorage
import store from 'store'
// 创建axios实例
const request = axios.create({
  //API请求的默认前缀
  baseUrl: process.env.VUE_APP_BASE_URL,
  // 请求超时时间
  timeout: 10000
})
// 异常拦截处理器 对请求异常二次封装
const errorHandler = (error) => {
  const status = get(error, 'reponse.status')
  switch (status) {
    case 400:
      error.message = '请求错误';
      break;
    case 401:
      error.message = '未授权，请登录';
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = `请求地址出错：${error.response.config.url}`;
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器内部错误';
      break;
    case 501:
      error.message = '服务未实现';
      break;
    case 502:
      error.message = '网关错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网关超时';
      break;
    case 505:
      error.message = 'HTTP版本不受支持';
      break;
    default:
      break;
  }
  return Promise.reject(error)
}
