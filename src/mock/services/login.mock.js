/*
 * @Author: zhangjiawei
 * @Date: 2021-01-28 13:55:54
 */
import Mock from 'mockjs'
export default [
  new RegExp('^/api/login$'),
  'post',
  () => {
    return Mock.mock({
      code: 200,
      data: {
        username: 'zhangjiawei',
        token: 'xxxxxxxxxxxxxxxxxxxxxxs'
      }
    })
  }
]