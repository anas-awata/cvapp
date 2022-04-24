import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
//import vueiframe, { VueIframe } from "vue-iframes";
//import html2canvas from "html2canvas";
import vueHtml2canvas from "vue-html2canvas";
import "@babel/polyfill";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mitt from "mitt";
const emitter = mitt();

const app = createApp(App).use(router).use(vueHtml2canvas);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
