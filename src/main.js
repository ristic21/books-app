import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import axiosInstance from "./utils/axios";

const app = createApp(App);

app.config.globalProperties.$axios = axiosInstance;

app.use(router);
app.use(store);

app.mount("#app");
