<template lang="html">  
  <div>
    <loader v-show="isLoading"></loader>
    <a href="#" @click.prevent="reset">x</a>
    <input v-model="query" @keyup.enter="search">
    <button type="button" @click="search">Search</button>
    <small>{{found}}</small>

    <p v-show="!results.length"> no results </p>
    <ul>
      <li v-for="result in results"> 
        <div class="artist">
          <p class="artist__name"> {{result.name}}</p>

          <img class="artist__img" 
            v-if="result.images.length" :src="result.images[0].url" :alt="result.name">
          <img v-else class="artist__img" src="http://www.bocanjrotc.com/wp-content/themes/remould/images/noimage-portfolio.png">
        </div> 
      </li>
    </ul>

  </div>

</template>

<style scoped>
    .artist {
        width: 250px;
        border: 1px solid black;
        text-align: center;
        margin: 10px;
    }
    
    .artist__name {}
    
    .artist__img {
        width:100%;
    }

    ul {
      list-style-type: none;
      display: flex; 
      flex-wrap: wrap; 
    }
    li{
      flex:1;
    }
</style>

<script>
    import spotify from '../services/spotify'
    import Loader from './Loader.vue'


    export default
    {
        name: "Search",
        components: { Loader }, 
        data()
        {
            return {
                query: "",
                results: [], 
                isLoading: false
            }
        },
        computed: {
            found(){
                var length = this.results.length
                if(length > 0 ){
                    return length + " results founded"; 
                }
                return "" ;  
            }
        }, 
        watch: {
            query (current, prev) {
                //console.log('current', current , 'prev', prev)
            }
        }, 
        methods:
        {
            search()
            {
                this.isLoading = true;
                spotify.search(this.query, 'artist')
                    .then(res =>
                    {
                        console.log(res)
                        this.results = res.artists.items
                        this.isLoading = false
                    })
            }, 
            reset(){
                this.query=""; 
                this.results=[];
            }
        }
    }
</script>
