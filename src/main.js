import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// Import Components
import ContentComponent from "./components/ContentComponent.vue";
import TestComponent from "./components/TestComponent.vue";
import SecTestComponent from "./components/SecTestComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import ErrorComponent from "./components/ErrorComponent.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: ContentComponent },
  { path: "/home", name: "Home", component: ContentComponent },
  { path: "/blog", name: "Blog", component: BlogComponent },
  { path: "/form", name: "Form", component: FormComponent },
  { path: "/test/:id?", name: "Test", component: TestComponent },
  { path: "/secTest/:id?", name: "SecTest", component: SecTestComponent },
  { path: "*", name: "Error", component: ErrorComponent },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
