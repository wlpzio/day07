<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:
    <label>{{ count }}</label>
    <br/>
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="handleSub(10)">值 - 10</button>
    <button @click="changeCountAction(888)">一秒后改成888</button>
    <button @click="changeTitle('xxxx')">改标题</button>

    <hr>
    <div>{{user.userInfo.name}}</div>
    <div>{{setting.theme}}</div>
    <div>{{userInfo.name}}</div>
    <div>{{theme}}-{{desc}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc'])
  },
  created () {
    console.log(this.$store.state.count)
  },
  methods: {
    handleSub (n) {
      // this.$store.commit('subCount', n)
      // 1.
      this.subCount(n)
    },
    // mapmutations和mapactions是在映射方法
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction'])
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
