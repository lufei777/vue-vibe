<template>
  <div class="import-meter">
    <div class="tip flex-align">
      <span class="icon"></span>
      <span>批量导入</span>
    </div>
    <div class="import-box">
      <span>批量导入设备</span>
      <el-input type="file" />
      <div class="operator-box">
        <el-button type="primary"  @click="onClickSureBtn">确定</el-button>
        <el-button type="default"  @click="goBack">返回</el-button>
      </div>
    </div>

  </div>
</template>

<script>
  import CommonApi from '../../../service/api/commonApi'
  export default {
    name: 'ImprotMeter',
    components: {
    },
    data () {
      return {
      }
    },
    computed:{
    },
    watch:{
    },
    methods: {
      goBack(){
        this.$parent.showImport=false
      },
      onClickSureBtn(){}
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .import-meter{
    width:83%;
    padding:10px;
    float: right;
    box-sizing: border-box;
    background: @white;
    .el-form{
      width:50%;
      margin:30px auto;
    }
    .el-input{
      width:220px;
    }
    .go-back{
      background: #ecf5ff;
      color:#3a8ee6;
      border-color:#c6e2ff;
    }
    .import-box{
      width:50%;
      margin:30px auto;
    }
    .operator-box{
      padding:20px;
      margin-left: 80px;
    }
  }
</style>
