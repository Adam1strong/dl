import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/header";
import 'animate.css'

import ElementUI from "element-plus";
import "element-plus/dist/index.css";

import AOS from "aos";

const app = createApp(App);

// ElementUI引入图标库的方式
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// Animate On Scroll Library
import "aos/dist/aos.css"
AOS.init();

app.use(router);
app.use(ElementUI);
app.mount("#app");
