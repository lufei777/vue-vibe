<template>
  <div class="item-product-coms">
    <div v-if="type==2" class="flex-align-between module-title">
      <h3>{{moduleData.menuName}}</h3>
      <span class="more-btn hover-pointer">更多</span>
    </div>
    <span v-if="type==1" class="single-module-name">{{moduleData.menuName}}</span>
    <div :class="type==2?'component-box com-width-border':'component-box'">
      <component v-for="(item,index) in moduleData.moduleList"
                 :key="index"
                 :is="item.componentName"
                 :class="moduleData.moduleList.length==2?'two-component':'item-component'"
                 :moduleItem="item"
                 class="flex-colum-center"
      />
    </div>
  </div>
</template>

<script>
  import energyProportionAnalysis from './energyProportionAnalysis'
  import energyElectricityProportion from './energyElectricityProportion'
  import operateIncome from './operateIncome'
  import buildingStatusProportion from './buildingStatusProportion'
  import assetTypeProportion from './assetTypeProportion'
  export default {
    name: 'ItemProModule',
    props:['moduleData','type'],
    components: {
      energyProportionAnalysis,
      energyElectricityProportion,
      operateIncome,
      buildingStatusProportion,
      assetTypeProportion
    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted(){
    }
  }
</script>

<style lang="less">
  .item-product-coms{
     display: flex;
     align-items: center;
     flex-direction: column;
    .component-box{
      /*height:100%;*/
      width:100%;
      flex-grow: 1;
    }
    .item-component{
      height:100%;
      width:100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .two-component{
      height:100%;
      width:50%;
      float: left;
    }
    .my-chart{
      margin:auto;
      width:95%;
      flex-grow: 1;
    }
    .com-width-border{
      border:1px solid #ccc;
      padding:10px;
      box-sizing: border-box;
    }
    .single-module-name{
      margin-bottom: 10px;
    }
  }
</style>
