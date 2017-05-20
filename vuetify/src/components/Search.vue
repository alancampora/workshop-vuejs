<template lang="html">  
  <div>
    <input v-model="query">
    <button type="button" @click="search">Search</button>

    <div class="artist" v-for="result in results">
      <div class="artist__name"> {{result.name}}</div>
      <img class="artist__img" v-if="result.images.length" :src="result.images[0].url" :alt="result.name">
      <p v-else>🚫 🌅</p>
    </div>
  </div>

</template>

<style scoped>
    .artist {}
    
    .artist__name {}
    
    .artist__img {
        width: 50%;
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
            }
        }
    }
</script>
