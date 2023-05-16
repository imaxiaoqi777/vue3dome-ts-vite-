<script  lang="ts">
import { provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  setup() {
    const x = 100
    const msg = ref('我是父组件原有的值')
    const handclick = (msgvalue: string | number) => {
      msg.value = msgvalue.toString()

    }
    const objs = { name: "xiaoqi", age: 18 }
    provide('objsa', objs)
    return {
      x, msg, handclick
    }
  }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  父组件：
  {{ msg }}
  <hr>
  <!-- <HelloWorld msg="Vite + Vue" :x=x v-on:chuanz="handclick" /> -->
  <hr>
  <h3>路由</h3>
  <router-link to="/">Home</router-link>
  <router-link to="/hell">Hello</router-link>

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
