<template>
  <div class="add-meter">
    <div class="tip flex-align">
      <span class="icon"></span>
      <span>添加表计</span>
    </div>
    <el-form ref="addForm" :rules="rules" :model="addForm" label-position="right" label-width="120px" >
      <el-form-item label="表计类别">
        <el-input  readonly="" value="监测器"></el-input>
      </el-form-item>
      <el-form-item label="表计名称">
        <el-select v-model="addForm.kind" @change="onSelectChange">
          <el-option label="实表" value="1"></el-option>
          <el-option label="末端虚表" value="2"></el-option>
          <el-option label="累加虚表" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="表计类型" v-if="addForm.kind==1">
        <el-select v-model="addForm.typeName">
          <el-option v-for="item in typeList" :key="item.id" :label="item.text" :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onClickNextBtn('meterForm')">下一步</el-button>
        <el-button @click="goBack" class="go-back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import CommonApi from '../../../service/api/commonApi'
  export default {
    name: 'AddMeter',
    components: {
    },
    data () {
      return {
        addForm:{
          kind:"1",
          typeName:'',
        },
        rules: {
        },
        typeList:[],
      }
    },
    computed:{
    },
    watch:{
    },
    methods: {
      async getAssetTypeList(){
        let res=await CommonApi.getAssetTypeList({
          id:3
        })
        res.shift()
        this.typeList=res
        this.addForm.typeName=res[0].name
      },
      onClickNextBtn(){
        this.$parent.showEdit=true
        this.$parent.showAdd=false
        this.$router.replace({
          path:this.$route.path,
          query:{
            typeName:this.addForm.typeName,
            kind:'PROBE'
          }
        })
      },
      goBack(){
        this.$parent.showAdd=false
      },
      onSelectChange(val){
        if(val!=1){
          this.addForm.typeName=''
        }
      }
    },
    mounted(){
      this.getAssetTypeList()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .add-meter{
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
  }
</style>
