<template>
  <div class="general">
    <slider-component text="Home" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Last articles</h2>
      </section>
      <sidebar-component />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
export default {
  name: "ContentComponent",
  components: {
    SidebarComponent,
    SliderComponent,
  },
};
</script>
