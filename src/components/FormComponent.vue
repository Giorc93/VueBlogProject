<template>
  <div class="general">
    <slider-component text="Form" small="true" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Form Component</h2>
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
  name: "FormComponent",
  components: { SidebarComponent, SliderComponent },
};
</script>
