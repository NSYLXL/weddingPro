import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname:""
  },
  mutations: {//专门修改state中的变量
    //不能放异步
    setUname(state,uname){
      state.uname=uname;
    }
  },
  actions: {//专门负责发送异步ajax请求,从服务器端获取数据
    //context代表整个vuex对象
  },
  modules: {
  }
})
