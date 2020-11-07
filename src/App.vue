<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Explanation</router-link> |
      <router-link to="/AddItems">Add Items</router-link> |
      <router-link to="/viewItems">View Items</router-link> |
      <router-link to="/Solve">Solve</router-link>
    </div>
    <hr class="headerruler" />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap");
* {
  background-color: #1d2d50;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  border-radius: 10px;
  padding: 5px;
  width: 25%;
  font-weight: bold;
}

input {
  color: #000000;
}

#nav {
  padding: 30px;
}

.headerruler {
  width: 50%;
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
