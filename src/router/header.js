import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";
import SeaView from '@/views/SeaView.vue'
import FootballView from '@/views/FootballView.vue'
import RomanticView from '@/views/RomanticView.vue'
import FoodView from '@/views/FoodView.vue'
import NotFound from '../views/404.vue';

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },{
    path: "/",
    component:
  }，
  {
    path: "/sea",
    name: "sea",
    component: SeaView,
  },
  {
    path: "/football",
    component: FootballView,
  },
  {
    path: "/bridge",
    name: "bridge",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/BridgeView.vue"),
  },
  {
    path: "/food",
    component: FoodView,
  },
  {
    path: "/romantic",
    component: RomanticView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
