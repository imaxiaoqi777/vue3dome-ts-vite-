<template>
  <div>
    {{ cunt }}
    <button @click="cunt++">+</button> <button @click="fun">-</button><br>
    objname: {{ obj.name }} <br> objage: {{ obj.age }} <button @click="obj.ageSub">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'

export default defineComponent({
  name: 'AboutView',
  setup() {
    let cunt = ref(0)
    const instance = getCurrentInstance()
    console.log(instance);
    let obj = reactive({
      name: "tom",
      age: 18,
      ageSub: () => { obj.age-- }
    })
    let fun = () => {
      cunt.value--
    }


    return { cunt, obj, fun }
  }
})
</script>

<style scoped></style>