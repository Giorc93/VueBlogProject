<template>
  <div class="general">
    <slider-component text="SecTest" small="true" />
    <div class="center">
      <section id="content">
        <h1>Second Test Component</h1>
        <!--Listing array -->
        <div id="articles">
          <div v-for="(carInf, index) in cars" :key="index">
            <!-- Sending Props -->
            <car-component :car="carInf"></car-component>
          </div>
        </div>
      </section>
      <sidebar-component />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import CarComponent from "./CarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent";

export default {
  name: "SecTestComponent",
  // Loading child component to send props
  components: {
    CarComponent,
    SidebarComponent,
    SliderComponent,
  },
  data() {
    return {
      cars: [
        {
          model: "Model1",
          year: 2017,
          image: "https://via.placeholder.com/150",
        },
        {
          model: "Model2",
          year: 2018,
          image: "https://via.placeholder.com/150",
        },
        {
          model: "Model3",
          year: 2019,
          image: "https://via.placeholder.com/150",
        },
        {
          model: "Model4",
          year: 2020,
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
  // Method object must be used in order to create and call fns
  methods: {},
  // Executes once the component has been loaded
};
</script>
