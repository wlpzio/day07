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
    // 一般都是传递一个参数，如果为多个参数就是传递对下，以下标来获取
    addCount (state, obj) {
      console.log(obj)
      state.count += obj.count
    },
    // addFive (state) {
    //   state.count += 5
    // },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    subCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  // 3.actions 处理异步
  // 注意 ：不能直接操作 state，擦欧总state海曙需要commit mutations
  actions: {
    // contex 上下文（此处未分模块，可以当作store仓库）
    changeCountAction (context, num) {
      // 这里是setTimeout模拟异步，以后大部分场景是发请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  }
})

// 导出给main.js使用
export default store
