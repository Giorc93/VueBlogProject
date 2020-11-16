<template>
  <div id="slider" :class="{ 'slider-big': !small, 'slider-small': small }">
    <h1>{{ text }}</h1>
    <router-link to="/blog" class="btn-white" v-if="!small"
      >Go to Blog</router-link
    >
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: ["text", "small"],
};
</script>
