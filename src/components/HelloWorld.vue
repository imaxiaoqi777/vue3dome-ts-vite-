
<template>
  <div>
    我是ref定义的值:{{ count }}
    <button @click="add">加count</button> <br>
    我是reactive定义的值:{{ counts.age }}
    <button @click="ageadd">年龄加</button><br>
    计算属性返回的值(count*2):
    {{ double }} <br>
    我是通过 toRefs解构的值:
    {{ name }}
    <hr>
    <button @click="() => { ks = !ks }">切换</button>
    <Dome v-if="ks"></Dome>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch, watchEffect, toRef, toRefs } from 'vue'
import Dome from '@/views/Dome.vue'
export default defineComponent({
  name: 'HelloWorld',
  components: {
    Dome
  },
  setup() {
    //创建响应式变量 基本类型
    const count = ref(0);
    const ks = ref(true)
    //创建响应式变量 引用类型
    const counts = reactive({
      name: "tom", age: 18

    })

    console.log(count);
    // 响应式方法
    const ass = ref({ name: "tom", age: "18" })
    console.log(ass);
    const akk = reactive({ name: "jarry", age: "20" })
    console.log(akk);

    const add = () => {
      count.value++;
    }
    const ageadd = () => {
      counts.age++;
    }

    //computed 计算属性
    const double = computed(() => count.value * 2)
    //toref
    const name = toRef(counts, 'name');


    console.log('---toref--', name);

    //toRefs 下边解构了
    const x = toRefs(counts)
    console.log('torefs', x);

    //监视一个 可以使用  watch
    // watch(() => counts.age, (newVal, oldVal) => {
    //   //新值，旧值
    //   console.log(newVal, oldVal);
    // })

    //多个
    // watch(() => [count.value, counts.age], (newVal, oldVal) => {
    //   console.log(newVal, oldVal);
    // })
    watch(() => counts.name, (newVal, oldVal) => {
      console.log(newVal, oldVal);

    })
    watchEffect(() => {
      console.log(count.value);
      console.log(counts.age);


    })
    // toRefs 其实就是把 toref 合并

    return {

      count,
      add,
      counts,
      ageadd,
      double,
      ks,

      ...toRefs(counts)

    }
  }
})
</script>

<style scoped></style>