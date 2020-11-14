<template>
  <div>
    <header-component />
    <slider-component />
    <div class="center">
      <router-view />
      <sidebar-component />
    </div>
    <div class="clearfix"></div>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";
/*
import HelloWorld from "./components/HelloWorld.vue";
import TestComponent from "./components/TestComponent.vue";
*/

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent,
  },
};
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
/* Importing stylesheet*/
@import "./assets/css/styles.css";
</style>
