<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>What you can do</h3>
      <a href="#" class="btn btn-success">Create article</a>
    </div>
    <div id="search" class="sidebar-item">
      <h3>Search</h3>
      <p>Find what you are looking for</p>
      <form action="">
        <input type="text" name="search" id="" />
        <input type="submit" value="Search!" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>
