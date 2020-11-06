<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Explination</router-link> |
      <router-link to="/AddItems">Add Items</router-link> |
      <router-link to="/viewItems">View Items</router-link> |
      <router-link to="/Solve">Solve</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  background-color: #1d2d50;
  color: #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.nav {
  font-size: 60px;
  font-weight: bold;
  color: #cdcdcd;
}

a {
}

#nav a.router-link-exact-active {
  color: #ff0000;
}
</style>
