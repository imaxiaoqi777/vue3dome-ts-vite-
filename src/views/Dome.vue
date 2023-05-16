<template>
    <div>
        <h1>鼠标点击的位置</h1>
        <p>x:{{ point.x }}</p>
        <p>y:{{ point.y }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue'
import usepoint from '../hook/usepoint'
export default defineComponent({
    name: 'myDome',

    setup() {
        let point = usepoint()
        return {
            point
        }
    }
})
</script>

<style scoped></style>