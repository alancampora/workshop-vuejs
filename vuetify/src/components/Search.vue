<template lang="html">  
  <div class="search">
    <loader v-show="isLoading"></loader>
    
    <div class="search__bar">
        <a href="#" @click.prevent="reset">x</a>
        <input v-model="query" @keyup.enter="search">
        <button type="button" @click="search">Search</button>
        <small>{{found}}</small>
    </div>

    <p v-show="!results.length"> no results </p>
    <ul>
      <artist v-for="artist in results" 
        :key="artist.id"
        :name="artist.name"
        :images="artist.images"> 

      </artist>
    </ul>

  </div>

</template>

<style scoped>
    .search{}
    .search__bar{
        text-align:center;
    }
    ul {
      list-style-type: none;
      display: flex; 
      flex-wrap: wrap; 
    }
    a{
        color:black;
    }
</style>

<script>
    import spotify from '../services/spotify'
    import Loader from './Loader.vue'
    import Artist from './Artist.vue'

    export default
    {
        name: "Search",
        components: { Loader, Artist}, 
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
        }, 
        created(){
            var path = location.pathname
            if(path !== '/'){
                this.query = path.substr(1)
                this.search()            
            }

        }
    }
</script>
