<template>
  <div class="history-statis">
    <div class="tip flex-align">
      <span class="icon"></span>
      <span>往期统计</span>
    </div>
    <MonitorChoose :showDateType="true" :showTwoMonitor="false"/>
    <MonitorModal />
    <el-button type="primary" class='handle-btn' @click="onClickBtn">处理</el-button>
    <div ref="myChart" class="my-chart"></div>
    <el-table :data="tableData" border height="350px">
      <el-table-column prop="time" label="时间" align="right" width="100px"></el-table-column>
      <el-table-column prop="max1" label="最大值(KWH)" align="right"></el-table-column>
      <el-table-column prop="min1" label="最小值(KWH)" align="right"></el-table-column>
      <el-table-column prop="avg1" label="平均值(KWH)" align="right"></el-table-column>
      <el-table-column prop="std1" label="均方差(KWH)" align="right"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import echarts from 'echarts'
  import MonitorChoose from '../coms/monitorChoose'
  import MonitorModal from '../../../components/monitorModal/index'
  import CommonApi from '../../../service/api/commonApi'
  import ChartUtils from '../../../utils/chartUtils'
  export default {
    name: 'DeviceAnalysis',
    components: {
      MonitorChoose,
      MonitorModal
    },
    data () {
      return {
        tableData:[],
        tableText:['B-ALE-1-a 照明 (KWH)'],
        myChart:''
      }
    },
    computed:{
      ...mapState({
        startTime:state=>state.analysis.startTime,
        endTime:state=>state.analysis.endTime,
        monitor:state=>state.analysis.monitor1,
        filterType:state=>state.analysis.filterType
      }),
    },
    watch:{
      monitor(){
        this.tableText[0]=this.monitor.text
      },
    },
    methods: {
      async getHistoryStatisData(){
        let params={
          startTime:this.startTime,
          lastTime:this.endTime,
          monitorId:this.monitor.id,
          filterType:this.filterType
        }
        let res =  await CommonApi.getHistoryStatisData(params)
         this.initChart(res)
         this.initTableData(res)
      },
      onClickBtn(){
        this.getHistoryStatisData()
      },
      initChart(res){
        let series= [{
            data:res.maxValues,
            type:'bar',
            name:'最大值'
            },{
            data:res.minValues,
            type:'bar',
            name:'最小值'
          },{
            data:res.avgValues,
            type:'bar',
            name:'平均值'
          },{
            data:res.stdValues,
            type:'bar',
            name:'均方差'
        }]
        let legendData=['最大值','最小值','平均值','均方差']
          this.myChart=echarts.init(this.$refs.myChart)
          let xAxis =res.xAxis
          let data={
            titleText:'',
            legendData,
            xAxis,
            series,
            yAxis:res.unit1
          }
          ChartUtils.handleBarChart(this.myChart,data)
      },
      initTableData(res){
        let tmp=[]
        res.xAxis.map((item,index)=>{
          tmp.push({
            time:item,
            max1:res.maxValues[index],
            min1:res.minValues[index],
            avg1:res.avgValues[index],
            std1:res.stdValues[index],
          })
        })
        this.tableData=tmp
      }
    },
    created(){
    },
    mounted(){
       setTimeout(()=>this.getHistoryStatisData(),500)
    }
  }
</script>

<style lang="less">
  .history-statis{
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
    .chart-box{
      width:80%;
      margin:20px auto;
    }
    .my-chart{
      width: 60%;
      height:350px;
      clear: both;
      float: left;
    }
    .choose-box{
      padding:20px 0;
      border-bottom: 1px solid #eaeaea;
    }
    .block{
      margin:0 40px;
    }
    .choose-tip{
      margin-left: 100px;
      width:80px;
      text-align: right;
    }
    .handle-btn{
      margin:10px;
      float: right;
    }
    .el-table{
      /*clear: both;*/
      float: right;
      width:40%;
    }
    .el-table th.gutter{
      width:16px;
    }
  }
</style>
