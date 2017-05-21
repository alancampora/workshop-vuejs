<template lang="html">
    <li class="artist">
        <p class="artist__name"> {{name}}</p>
        <img class="artist__img" 
            v-if="images.length" :src="images[0].url" :alt="name">
        <img v-else class="artist__img" src="http://www.bocanjrotc.com/wp-content/themes/remould/images/noimage-portfolio.png">
    </li> 
</template>

<script> 
    export default {
        name: "Artist", 
        props: {
           name:{
                type: String
            }, 
            images:{
                type: Array
            }
        }
    }
</script> 

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
</style>
