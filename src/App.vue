<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  created(){

  },
}
</script>
<style lang="less">
@import url('./less/index.less');
#app {
  font-family: 'MicrosoftYaHei', Helvetica, Arial, sans-serif;
  color: #606266;
  height:100%;
}
</style>
