<template>
  <div id="app">
    <DHeader></DHeader>
    <RouterView></RouterView>
  </div>

</template>

<script>
import DHeader from './components/DHeader.vue';

export default {
  name: 'App',
  components: {
    DHeader
  }
}
</script>

<style>
body {
  background-color: #ededed;
}
</style>