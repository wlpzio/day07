<template>
  <div class="box">
    <h2>Son1 子组件{{ title }}</h2>
    从vuex中获取的值:
    <label>{{ count }}</label>
    <br/>
    <button @click="handleAdd">值 + 1</button>
    <button @click="addFive">值 + 5</button>
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
    handleAdd () {
      // 错误代码，默认不会检查
      // this.$store.state.count++
      // 严格通过mutations解决
      this.$store.commit('addCount')
    },
    addFive () {
      this.$store.commit('addFive')
    },
    changeFn () {
      this.$store.commit('changeTitle')
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
