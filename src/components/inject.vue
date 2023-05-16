<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
    setup() {
        const x = 100
        provide('xx', x)



        return {}
    }
})
</script>

<style scoped></style>