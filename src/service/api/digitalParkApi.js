import {get, post, url,del,put} from '../axios/ApiDecorator'

class DigitalParkApi {

  @url('/oaApi/menu/productList')
  @get
  getProductList(){}

  @url('/oaApi/menu/tree')
  @get
  getMenu(){}

  @url('/oaApi/userModuleRel/modulesByType')
  @get
  getModulesByType(){}

  @url('/oaApi/menu/tree')
  @get
  getMenuTree(){}

  @url("/oaApi/menu/productModules")
  @get
  getProModules(){}
}

export default new DigitalParkApi()

