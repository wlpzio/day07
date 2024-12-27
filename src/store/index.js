// 存放vuex相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // 严格模式(有利于初学者，检测不规范的代码=》上线需要关闭)
  strict: true,
  // 通过state提供数据
  state: {
    title: '仓库大标题',
    count: 100
  },
  // 2.通过mutations可以提供修改数据的方法
  mutations: {
    addCount (state) {
      state.count += 1
    },
    changeTitle (state) {
      console.log(state.title)
    }
  }
})

// 导出给main.js使用
export default store
