<template>
  <div>
    <div class="man-made-list" v-if="!showAdd" >
      <div class="tip flex-align">
        <span class="icon"></span>
        <span>人工采集列表</span>
      </div>
      <div class="flex condition-box">
        <div class="block">
          <span class="demonstration">开始时间</span>
          <el-date-picker
            v-model="startTime"
            type="datetime"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="onTimeChange(-1)"
            :clearable="false"
          >
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">结束时间</span>
          <el-date-picker
            v-model="endTime"
            type="datetime"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="onTimeChange(-1)"
            :clearable="false"
          >
          </el-date-picker>
        </div>
        <el-button type="primary" @click="getManMadeCollectList">确定</el-button>
      </div>
      <CommonTable  :tableObj="tableData" :curPage="curPage"/>
      <div class="operator-box">
        <el-button type="primary" icon="el-icon-delete">删除记录</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="onClickAddBtn">添加记录</el-button>
      </div>
    </div>
    <AddCollect v-if="showAdd" />
  </div>
</template>

<script>
  import CommonApi from '../../../service/api/commonApi'
  import CommonTable from '../../../components/commonTable/index'
  import AddCollect from './addCollect'
  export default {
    name: 'ManMadeCollectList',
    components: {
      CommonTable,
      AddCollect
    },
    data () {
      return {
       startTime:'',
       endTime:'',
       curPage:1,
       tableData:{},
       showAdd: false
      }
    },
    methods: {
      onTimeChange(flag){

      },
      async getManMadeCollectList(){
        let params={
          start:this.startTime,
          end:this.endTime,
          page:this.curPage,
          rows:10
        }
        let res = await CommonApi.getManMadeCollectList(params)
        if(!res || !res.total){
          res={
            data:[],
            total:0
          }
        }
        res.labelList=[{name:'',prop:'',type:'selection'},
          {name:'监测器名称',prop:'monitorStr'},
          {name:'录入时间',prop:'lookTime'},
          {name:'用户名',prop:''},
          {name:'表值',prop:'value'}]
        res.dataList=res.data
        res.hideExportBtn=true
        res.showOperator=true
        this.tableData=res
      },
      onClickAddBtn(){
         this.showAdd= true
      }
    },
    mounted(){
      this.getManMadeCollectList()
    }
  }
</script>

<style lang="less">
  .man-made-list{
    margin-top: 85px;
    padding:0 20px;
    .tip{
      height: 66px;
      border-bottom: 1px solid #eaeaea;
      .icon {
        width: 2px;
        height: 24px;
        background: #01465c;
        border-radius: 2px;
        margin-right: 10px;
      }
      span{
        font-size: 24px;
        color:#01465c;
      }
    }
    .condition-box{
      padding:20px 0;
    }
    .block{
      margin:0 20px;
    }
    .demonstration{
      margin-right: 5px;
    }
    .operator-box{
      clear: both;
      padding:10px 0;
      .el-button{
        margin-right: 20px;
      }
    }
  }
</style>
