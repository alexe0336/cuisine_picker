<template>
  <div id="app">
    <CuisinePicker />
  </div>
</template>

<script>
import CuisinePicker from './components/CuisinePicker.vue';

export default {
  name: 'App',
  components: {
    CuisinePicker
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
