<template>
  <section id="content">
    <h1>Test Component</h1>
    <h2>{{ subtitle }}</h2>
    <h3>{{ dataUrl }}</h3>
  </section>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      subtitle: "Test component subtitle",
      dataUrl: null,
    };
  },
  mounted() {
    this.dataUrl = this.$route.params.id;
  },
};
</script>
