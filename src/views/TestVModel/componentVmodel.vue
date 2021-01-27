<!--
 * @Author: zhangjiawei
 * @Date: 2021-01-22 19:31:40
-->
<template>
  <div>
    <input
      type="text"
      :value="text"
      @input="$emit('change1', $event.target.value)"
      >
  </div>
</template>
<script>
export default {
  name: 'component',
  model: {
    props: 'text',
    event: 'change1' // 事件跟上面的事件保持一致
  },
  props: {
    text: String,
    default: () => {
      return ''
    }
  },
  data( ){
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  
</style>