<template>
<div id="app">
<!--     <img src="./assets/logo.png"> -->
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
p {
  margin: 0;
}
.panel-heading {
  background-image: none;
  backgroun d-color: unset;
}
.panel-heading h3 {
  margin: auto;

}
.thumbnail {
  display: inline-block;
  margin-bottom: 0;
}
</style>