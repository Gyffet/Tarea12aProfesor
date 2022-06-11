import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Capturas from "../views/Capturas.vue"
import Compras from "../views/Compras.vue"
import Carrito from "../views/Carrito.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/capturas",
        name: "Capturas",
        component: Capturas
    },
    {
        path: "/carrito",
        name: "Carrito",
        component: Carrito
    },
    {
        path: "/compras",
        name: "Compras",
        component: Compras
    },
    
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router;