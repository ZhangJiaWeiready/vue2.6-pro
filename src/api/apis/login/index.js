/*
 * @Author: zhangjiawei
 * @Date: 2021-01-28 15:55:59
 */
import request from '../../request'
const BASE_URL_PREFIX = '/api'
// 登录接口
export const login = (params) => {
  return request.post(`${BASE_URL_PREFIX}/login`, params)
}