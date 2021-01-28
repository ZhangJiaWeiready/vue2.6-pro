/*
 * @Author: zhangjiawei
 * @Date: 2021-01-26 17:58:01
 */
const modifyVars = require('./src/styles/antd-theme.less')
const webpack = require('webpack')
const path = require('path')
module.exports = {
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'https://development.com/api',
        ws: true,
        //
        logLevel: 'debug',
        // 是否允许跨域
        changeOrigin: true,
        // 重写本地发起得路径
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    // 解决antdesign vue里面得svg图片过大，有很大一部分不会使用到
    resolve: {
      alias: {
        '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/assets/icon.js')
      }
    }
  },
  // 解决多语言问题
  chainWebpack: (config) => {
    config
      .plugin('ContextReplacementPlugin')
      .use(webpack.ContextReplacementPlugin, [/moment[/]locale$/, /zh-cn/]);
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars
        }
      }
    }
  }
}