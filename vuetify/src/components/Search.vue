<template lang="html">  
  <div>
    <input v-model="query">
    <button type="button" @click="search">Search</button>
    <a href="#" @click.prevent="reset">Reset</a>

    <p v-show="!results.length"> no results </p>
    <ul>
      <li v-for="result in results"> 
        <div class="artist">
          <p class="artist__name"> {{result.name}}</p>

          <img class="artist__img" v-if="result.images.length" :src="result.images[0].url" :alt="result.name">
          <p v-else>🚫 🌅</p>
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
        width:60%;
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

    export default
    {
        name: "Search",
        data()
        {
            return {
                query: "",
                results: []
            }
        },
        methods:
        {
            search()
            {
                spotify.search(this.query, 'artist')
                    .then(res =>
                    {
                        console.log(res)
                        this.results = res.artists.items
                    })
            }, 
            reset(){
                this.query=""; 
                this.results=[];
            }
        }
    }
</script>
