<template>
  <div id="app">
    <h1>根组件
      - {{ title }}
      - {{ count }}
    </h1>
    <input type="text" :value="count" @input="handleInput"/>
    <Son1></Son1>
    <hr/>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapState } from 'vuex'

// console.log(mapState(['count', 'title']))

export default {
  name: 'app',
  computed: {
    ...mapState(['count', 'title'])
  },
  data: function () {
    return {}
  },
  components: {
    Son1,
    Son2
  },
  created () {
    // console.log(this.$router)
    console.log(this.$store)
  },
  methods: {
    handleInput (e) {
      //   1.实时获取输入框的值
      const num = +e.target.value
      // 2.提交mutaitions，调用mutation函数
      this.$store.commit('changeCount', num)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
