<template>
  <div id="app">
    <h1>Vuetify</h1>
    <hr>

    <search></search>
  </div>
</template>

<script>
  import Search from './components/Search.vue'

  export default {
    name: 'app',
    components: { Search }
  }

</script>
