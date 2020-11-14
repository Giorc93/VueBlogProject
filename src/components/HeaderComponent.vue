<template>
  <header id="header">
    <div class="center">
      <!--LOGO-->
      <div id="logo">
        <img src="../assets/vue-logo.svg" alt="app-logo" />
        <span id="brand"> <strong>Vue</strong>App</span>
      </div>
      <!--MENU-->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/form">Form</router-link>
          </li>
          <li>
            <router-link to="/test">Page 1</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Test', params: { id: 'Params' } }"
              >Page 2</router-link
            >
          </li>
        </ul>
      </nav>

      <!--ClearFix-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
