<template>
  <div class="app" id="app">

    <layout> 
        <top slot="top" 
            :title="appName"></top>        

        <bottom slot="content">
            <search slot="content"></search>            
        </bottom>    

    </layout>
  </div>
</template>

<script>
  import Top from './components/layout/Top.vue'
  import Bottom from './components/layout/Bottom.vue'
  import Search from './components/Search.vue'
  import Layout from './components/layout/Layout.vue'

  export default {
    name: 'app',
    data(){
        return{
            appName: "VUETIFY"
        }
    }, 
    components: {Layout, Top, Bottom, Search}
  }

</script>

<style scoped>
    .app{
        font-family: 'Indie Flower', cursive;
        font-size: 14pt;
        background-color:white;
        color:black;
    }     
</style>
