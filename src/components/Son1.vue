<template>
  <div class="box">
    <h2>Son1 子组件{{ title }}</h2>
    从vuex中获取的值:
    <label>{{ count }}</label>
    <br/>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="handleChange">一秒后修改为666</button>
    <button @click="changeFn">改标题</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    handleAdd (n) {
      // 错误代码，默认不会检查
      // this.$store.state.count++
      // 严格通过mutations解决
      console.log(n)
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    // addFive () {
    //   this.$store.commit('addFive')
    // },
    changeFn () {
      this.$store.commit('changeTitle', '黑马程序员')
    },
    handleChange () {
      // 调用action
      this.$store.dispatch('changeCountAction', 666)
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>
