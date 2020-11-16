<template>
  <div class="general">
    <slider-component text="Blog" small="true" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Blog Component</h2>
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
  name: "BlogComponent",
  components: {
    SidebarComponent,
    SliderComponent,
  },
};
</script>
