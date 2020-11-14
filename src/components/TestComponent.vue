<template>
  <section id="content">
    <h1>Test Component</h1>
    <h2>{{ subtitle }}</h2>
    <h3>{{ dataUrl }}</h3>
    <button @click="upFn()">{{ click }}</button>
    <button @click="redirTo()">Go To Blog</button>
    <h2 class="sub-header">Reactivity</h2>
    <input type="text" v-model="name" />
    <p>{{ name }}</p>
    <h2 class="sub-header">If Condition</h2>
    <input type="number" v-model="age" />
    <p v-if="age && age >= 21">Age over 21</p>
    <p v-else-if="age && age == 20">Age: 20</p>
    <p v-else>Age under 21</p>
    <h2>For Loop</h2>
    <ul>
      <li v-for="(elm, index) in testArr" :key="index">{{ elm }}</li>
    </ul>
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
      name: "",
      age: 12,
      testArr: [1, 2, 3, 4, 5],
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
