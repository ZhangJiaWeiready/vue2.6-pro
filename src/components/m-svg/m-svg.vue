<!--
 * @Author: zhangjiawei
 * @Date: 2021-01-27 20:20:38
 * 
-->
<template>
  <svg class="mw-svg" aria-hidden="true">
    <use :xlink:href="iconName"/> 
  </svg>
</template>
<script>
export default {
  name: 'm-svg',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  compoted: {
    iconName() {
      return `#${this.name}`
    }
  }
}
</script>
<style lang="less" scoped>
  .mw-svg{
    width: 1.4em;
    height: 1.4em;
    fill: currentColor;
    overflow: hidden;
    line-height: 1em;
    display: inline-block;
  }
</style>