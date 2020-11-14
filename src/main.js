import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// Import Components
import ContentComponent from "./components/ContentComponent.vue";
import TestComponent from "./components/TestComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import FormComponent from "./components/FormComponent.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: ContentComponent },
  { path: "/home", name: "Home", component: ContentComponent },
  { path: "/blog", name: "Blog", component: BlogComponent },
  { path: "/form", name: "Form", component: FormComponent },
  { path: "/test/:id?", name: "Test", component: TestComponent },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
