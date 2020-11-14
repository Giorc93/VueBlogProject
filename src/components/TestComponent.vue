<template>
  <section id="content">
    <h1>Test Component</h1>
    <h2>{{ subtitle }}</h2>
    <h3>{{ dataUrl }}</h3>
    <button @click="upFn()">{{ click }}</button>
    <button @click="redirTo()">Go To Blog</button>
  </section>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      subtitle: "Test component subtitle",
      dataUrl: null,
      click: 1,
    };
  },
  // Method object must be used in order to create and call fns
  methods: {
    upFn() {
      this.click = this.click + 1;
    },
    // Redirecting to path using $router.push('/path')
    redirTo() {
      //this.$router.push("/blog/testParam");
      //this.$router.push({name:'Blog', params: {data: 'testParam'} });
      this.$router.push({ name: "Blog" });
    },
  },
  // Executes once the component has been loaded
  mounted() {
    this.dataUrl = this.$route.params.id;
    console.log("Component mounted");
  },
  // Executes once the component has been created and it's being loaded
  created() {
    console.log("Component created");
  },
  // Executes everytime the component is updated (changes)
  updated() {
    console.log("Component updated");
  },
  // Executes once the component is ddestroyed
  destroyed() {
    console.log("Component destroyed");
  },
};
</script>
