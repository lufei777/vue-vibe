<template>
  <div class="">
    <DataReport />
  </div>
</template>

<script>
  import DataReport from './dataReport'
  import CommonApi from '../../../service/api/commonApi'
  export default {
    name: 'SpaceReport',
    components: {
      DataReport
    },
    data () {
      return {
      }
    },
    methods: {},
    mounted(){
    }
  }
</script>

<style lang="less">

</style>
