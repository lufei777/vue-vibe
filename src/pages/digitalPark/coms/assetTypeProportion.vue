<template>
  <div class="building-status-proportion">
    <div ref="pieCharts" class="pie-charts"></div>
    <div>{{moduleItem.moduleName}}</div>
  </div>
</template>

<script>
import CommonFun from "../../../utils/commonFun";
import ChartUtils from "../../../utils/chartUtils";
export default {
  name: "AssetTypeProportion",
  components: {},
  props: ["moduleItem"],
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.building-status-proportion {
  .pie-charts {
    height: 95%;
  }
}
</style>
