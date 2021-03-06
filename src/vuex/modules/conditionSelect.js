import moment from 'moment'
import CommonApi from "../../service/api/commonApi";
const state = {
  selectType:'2',
  radioType:0,
  startTime:moment(new Date(new Date().getTime()-30*24*60*60*1000)).format('YYYY-MM'),
  lastTime:'',
  checkedFloorList:[],
  energy:[{
    id:'34',
    name:'电'
  }],
  tbhbSelectType:'2',
  tbhbRadioType:0,
  tbhbStartTime:moment(new Date(new Date().getTime()-30*24*60*60*1000)).format('YYYY-MM'),
  tbhbLastTime:'',
  tbhbCheckedFloorList:[],
  tbhbEnergy:[{
    id:'34',
    name:'电'
  }],
  typeSelectType:'2',
  typeRadioType:0,
  typeStartTime:moment(new Date(new Date().getTime()-30*24*60*60*1000)).format('YYYY-MM'),
  typeLastTime:'',
  typeCheckedFloorList:[],
  typeEnergy:[{
    id:'44',
    name:'空调用电'
  },{
    id:'45',
    name:'照明用电'
  }],
  activeIndex:1,
  curModule:1 //1代表统计分析模块的同比环比分析，2能耗展示模块的分时能耗、3分项能耗
}

const mutations={
  energy(state,data){
    state.energy=data
  },
  selectType(state,data){
    state.selectType=data
  },
  radioType(state,data){
    state.radioType=data
  },
  startTime(state,data){
    state.startTime=data
  },
  lastTime(state,data){
    state.lastTime=data
  },
  checkedFloorList(state,data){
    state.checkedFloorList=data
  },
  activeIndex(state,data){
    state.activeIndex=data
  },
  tbhbEnergy(state,data){
    state.tbhbEnergy=data
  },
  tbhbSelectType(state,data){
    state.tbhbSelectType=data
  },
  tbhbRadioType(state,data){
    state.tbhbRadioType=data
  },
  tbhbStartTime(state,data){
    state.tbhbStartTime=data
  },
  tbhbLastTime(state,data){
    state.tbhbLastTime=data
  },
  tbhbCheckedFloorList(state,data){
    state.tbhbCheckedFloorList=data
  },
  typeEnergy(state,data){
    state.typeEnergy=data
  },
  typeSelectType(state,data){
    state.typeSelectType=data
  },
  typeRadioType(state,data){
    state.typeRadioType=data
  },
  typeStartTime(state,data){
    state.typeStartTime=data
  },
  typeLastTime(state,data){
    state.typeLastTime=data
  },
  typeCheckedFloorList(state,data){
    state.typeCheckedFloorList=data
  },
  curModule(state,data){
    state.curModule=data
  }
}

const actions={
   resetStates({commit}){
    commit('selectType', 2)
    commit('radioType', 0)
    commit('startTime', moment(new Date(new Date().getTime()-30*24*60*60*1000)).format('YYYY-MM'))
    commit('lastTime', '')
    commit('checkedFloorList',[])
    commit('energy',[{id:'34', name:'电'}])
    commit('tbhbSelectType', 2)
    commit('tbhbRadioType', 0)
    commit('tbhbStartTime', moment(new Date(new Date().getTime()-30*24*60*60*1000)).format('YYYY-MM'))
    commit('tbhbLastTime', '')
    commit('tbhbCheckedFloorList',[])
    commit('tbhbEnergy', [{id:'', name:''}])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
