<!--
 * @Author: zhangjiawei
 * @Date: 2021-01-22 20:07:30
-->
<template>
  <div>
    <div>{{text}}</div>
    <testVModelCom v-model="text"/>
  </div>
</template>
<script>
import testVModelCom from './componentVmodel'
export default {
  name: 'testVModel',
  components: {
    testVModelCom
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>
<style lang="less" scoped>
  
</style>