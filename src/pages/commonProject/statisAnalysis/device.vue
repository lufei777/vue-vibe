<template>
  <div class="device-analysis">
    <div class="tip flex-align">
      <span class="icon"></span>
      <span>传感器设备状态</span>
    </div>
    <div class="chart-box"><div ref="myChart" class="my-chart"></div></div>
    <el-dialog
      :visible.sync="showDialog"
      width="30%"
    >
      <el-button type="primary" @click="onClickExportBtn">导出报表</el-button>
      <div class="table-box">
        <el-table :data="tableData" border>
          <el-table-column prop="monitorId" label="编号" align="right"></el-table-column>
          <el-table-column prop="name" label="类型" align="right"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import CommonApi from '../../../service/api/commonApi'
  import ChartUtils from '../../../utils/chartUtils'
  export default {
    name: 'DeviceAnalysis',
    components: {
    },
    data () {
      return {
        deviceData:{},
        myChart:'',
        tableData:[],
        showDialog:false,
        chartIndex:0
      }
    },
    methods: {
      async getMonitorState(){
        let res = await CommonApi.getMonitorState()
        this.myChart = echarts.init(this.$refs.myChart);
        let titleText = '传感器状态统计'
        let legendData = ['不可用','正常','警告','错误']
        let seriesData=res.values
        let seriesName="监控器状态"
        let	option = {
               title:{
                 x:'center'
               },
               legend: {
                left: 'left',
                top:50
               },
              color:['dimGrey', 'green', 'orange', 'red'],
        };
        let data={
          titleText,
          legendData,
          seriesData,
          seriesName
        }
        ChartUtils.hollowPieChart(this.myChart,data)
        this.myChart.setOption(option)
        let that = this
        this.myChart.on('click',function(val){
          that.chartIndex=val.dataIndex
          that.getTableData(val.dataIndex)
        })
      },
      async getTableData(index){
        let res = await CommonApi.getDeviceTableData({
            filter:'state',
            index
        })
        let tmp=[]
        res.monitorIds.map((item,index)=>{
          tmp.push({
            monitorId:item,
            name:res.captions[index]
          })
        })
        this.tableData=tmp
        this.showDialog=true
      },
      onClickExportBtn(){
        let url=`/vibe-web/statistics/getMonitorDetailsExport?filter=state&index=${this.chartIndex}`
        location.href=url
      }
    },
    mounted(){
      this.getMonitorState()
    }
  }
</script>

<style lang="less">
  .device-analysis{
    margin-top: 85px;
    padding:0 20px;
    overflow: hidden;
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
    .chart-box{
      width:80%;
      margin:20px auto;
      overflow: hidden;
    }
    .my-chart{
      height:500px;
    }
    .el-dialog__body{
      height:500px;
      overflow: hidden;
    }
    .el-button{
      float: right;
      margin:10px;
    }
    .table-box{
      overflow: auto;
      height: 450px;
      clear: both;
    }
  }
</style>
