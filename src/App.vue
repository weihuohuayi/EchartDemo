<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <dash-board />
  </div>
</template>

<script>
  import DashBoard from './components/DashBoard.vue'

  export default {
    name: 'App',
    components: {
      DashBoard
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    height: 100%;
  }
</style>