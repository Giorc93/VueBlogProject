<template>
  <section id="content">
    <h1>Second Test Component</h1>
    <!--Listing array -->
    <div id="articles">
      <article
        class="article-item"
        id="article-template"
        v-for="(car, index) in cars"
        :key="index"
      >
        <div class="image-wrap">
          <img :src="car.image" alt="test-img" />
        </div>
        <h2>{{ car.model }}</h2>
        <!-- Conditional Binding -->
        <span class="date" :class="{ boldClass: car.year > 2018 }">{{
          car.year
        }}</span>
        <a href="#">See more</a>
        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecTestComponent",
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
