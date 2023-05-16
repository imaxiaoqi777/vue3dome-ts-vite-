import { createRouter, createWebHistory } from "vue-router";
import Home from '../App.vue'
import Helloword from '../components/HelloWorld.vue'
const routes = [
    { path: "/", component: Home },
    { path: "/hell", component: Helloword },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
