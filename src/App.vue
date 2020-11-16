<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
/*
import HelloWorld from "./components/HelloWorld.vue";
import TestComponent from "./components/TestComponent.vue";
*/

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
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
