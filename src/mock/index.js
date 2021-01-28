/*
 * @Author: zhangjiawei
 * @Date: 2021-01-28 13:55:44
 */
import Mock from 'mockjs'
// 设置全局演示，没有延时的话会检测不到数据的变化
Mock.setup({
  timeout: '500-800',
})
// 导入所有的模块接口(require.context可以用来获取目录上下文)
const context = require.context('./services', true, /.mock.js$/);
// 注册所有的mock服务
context.keys().forEach(key => {
  Object.keys(context(key)).forEach((paramKey) => {
    Mock.mock(...context(key)[paramKey])
  })
});