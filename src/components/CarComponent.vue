<template>
  <article class="article-item" id="article-template">
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
</template>

<script>
export default {
  name: "CarComponent",
  // Getting prop from parent
  props: ["car"],
};
</script>
