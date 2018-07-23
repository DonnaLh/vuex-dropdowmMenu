
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//定义一个容器
let listData = [
  {
    title:'javaScript'
  },
  {
    title:'html+css'
  },
  {
    title:'jquery'
  },
  {
    title:'Vue'
  },
  {
    title:'React'
  }
]
let store = new Vuex.Store({
  state:{
    isShow:false,
    listData,
    val:''
  },
  mutations:{//唯一修改事件的回调函数
    changeSH(state){
      state.isShow = !state.isShow
    },
    changeVal(state,payload){
      state.val = payload
    }

  }
})
export default store;
