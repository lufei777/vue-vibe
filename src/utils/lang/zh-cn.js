import DigitalParkApi from '../../service/api/digitalParkApi'
// async function getMenu(){
//   let menu =await DigitalParkApi.getMenu()
//   return menu
// }
let obj = {
   homeHeader: {
    news: '消息',
    skin: '换肤',
    searchText:'搜索',
    title:'cizing数字园区',
    // menu:[],
    getMenu:async function(){
      this.menu =await DigitalParkApi.getMenu()
    }
  },
}
obj.homeHeader.getMenu()
console.log(obj)
export default obj
