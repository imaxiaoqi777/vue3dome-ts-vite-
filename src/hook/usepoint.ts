import {  onBeforeUnmount, onMounted, reactive } from 'vue'
export  default function () {
   const point = reactive({
        x: 0,
        y: 0,
    })
    function savePoint(event: any) {
        point.x = event.clientX
        point.y = event.clientY
        console.log(point);
    }
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
        
    
}