/*
 * @Author: zhangjiawei
 * @Date: 2021-01-26 17:58:01
 */
const modifyVars = require('./src/styles/antd-theme.less')
module.exports = {
  devServer: {
    port: 8080,
    open: true
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