//SASS
import "./scss/bootstrap.scss";
import "./scss/main.scss";

//Modules
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

const root = createApp(App);

root.use(PerfectScrollbar);

root.mount("#app");
