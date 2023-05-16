<template>
  <div>
    {{ count }}
    <button @click="count++">+</button><br>
    <hr>
    {{ name }}
    {{ age }} {{ names }} <br>
    toRaw 转换后的非响应式对象
    {{ obj3.age }}
    <button @click="obj3.age++">+</button>
    <button @click="add">objage++</button><br>
    <hr>
    fullname: {{ fullName }} <br>
    objbug: {{ fullName2 }}
    <button @click="sets">修改为jarry</button>
    <hr>
    只读属性：{{ obj2.name }}
    <!-- <button @click="obj2.name =" jarry">报错修改</button> 此条语句报错因为obj2无法修改 -->
    <hr>
    组件抽离：
    你的鼠标点击位置是：
    {{ x }} {{ y }}
    <hr>
    <button @click="chuanz">传个值</button>
    provide: {{ objs?.name }} {{ objs?.age }}
    {{ xx }}
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref, toRef, computed, toRefs, readonly, watch, toRaw, inject } from 'vue'
import useMousePosition from './shudj'
export default defineComponent({
  props: {
    msg: String,
    x: Number
  },
  setup(props, context) {
    const { x, y } = useMousePosition();
    const chuanz = () => {
      context.emit('chuanz', '我是子组件传递的值')
    }

    //1.创建ref对象
    const count = ref(0);

    console.log("context", context);
    console.log("props", props);

    //2.创建reactive对象
    const obj = reactive({
      name: 'tom',
      age: 18,
      add() {
        obj.age++
      },
      bug: 'tomhks',
      sets() {
        obj.bug = 'jarry'
      }
    })


    //3.响应式写法toref
    const names = toRef(obj, 'age')
    // toRef 是 Vue3 中用来创建一个基于源响应式对象属性的 Ref 对象的方法。
    // 它的底层实现是通过调用 reactive 方法创建一个响应式对象，
    // 然后通过 Object.defineProperty 方法将属性定义为成员访问器（accessor），从而实现 Ref 对象的特性。


    //4.torefs  大多数来说是用来解构reactive 的
    const names2 = toRefs(obj)
    //其实是一个对象
    console.log(names2.name.value === obj.name);


    // 5.获得当前组件
    const instance = getCurrentInstance()
    console.log(instance);


    //6.计算属性
    const fullName = computed(() => {
      return obj.name + ' ' + obj.age
    })
    //计算属性 依赖于obj.bug 被修改时拦截打印
    const fullName2 = computed({
      get() {
        return obj.bug
      },
      set(val) {
        console.log(val);
        // vue3 无法使用set进行修改值
      }
    })

    // 7.readonly 只读的响应式属性
    const obj2 = readonly({ name: 'namehks', age: 20 })

    //8.watch 观测属性来啦
    //8.1监听 响应式变化
    watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      //监测 count 可以直接获取新值和旧值
    })
    //8.2监听 响应式对象
    watch(obj, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      //监测 obj 可以直接获取新值和旧值
      //如果不加deep:true 只能监测到obj的引用变化 无法监测到obj的属性变化
    }, { deep: true })
    //8.3监听 多个响应式对象
    watch([count, obj], (newVal, oldVal) => {
      console.log(newVal, oldVal);
      //监测 count obj 可以直接获取新值和旧值
    }, { deep: true })
    //8.4immediate:true 立即执行一次
    //挂载时立即执行一次 也就是watch创建时立刻执行一次 旧值为undefined
    watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      //监测 count 可以直接获取新值和旧值
    }, { immediate: true })


    //9 toRaw 用来解构响应式对象的
    //把响应式对象转换成普通对象 toraw方法是一种浅拷贝的方式
    const obj3 = toRaw(obj)
    console.log(obj3);

    // 10. provide 与 inject
    const objs = inject('objsa')
    const nums: number | undefined = inject('xx')

    return {
      // obj, 
      count, names, fullName, fullName2,
      ...toRefs(obj),
      // ...toRefs(names2)是用来解构obj的值的 比如说模板使用 obj.name obj.age 通过torefs代理后就可以直接使用name age 
      // ...toRefs(obj2) 命名冲突报错
      obj2, obj3, x, y, chuanz, objs, nums
    }


  }


})
</script>

<style scoped></style>