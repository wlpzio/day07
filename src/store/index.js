// 存放vuex相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // 通过state提供数据
  state: {
    title: '大标题',
    count: 100
  }
})

// 导出给main.js使用
export default store
