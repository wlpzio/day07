// user模块
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  score: 80
}
const mutations = {}
const actions = {}
const getters = {}

// 要拿到下面的状态，比如userinfo，需要命名空间
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
