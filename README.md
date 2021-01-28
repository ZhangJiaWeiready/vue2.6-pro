<!--
 * @Author: zhangjiawei
 * @Date: 2021-01-22 15:50:17
-->
# vue2-pro

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


项目增加使用ant-design-vue
在main.js中引入

## 静态资源得处理svg
1. 写组件
2. 所有的静态资源文件都会上传到阿里云OSS上，所以在环境变量上加以区分


需要做的
1. 加入mockjs
2. 封装axios
3. 封装路由守卫

优化
1. 由于UI库里面得svg文件几百k，所以进行优化
2. 部分UI组件体积较大，例如DatePicker，根据业务需求，应考虑在页面中进行加载，尽量保证首屏加载得速度
3. 覆盖ant得样式less文件
  

4. 封装axios
  1. 引入axios
  引入store
    本地存储，存储到localstorage