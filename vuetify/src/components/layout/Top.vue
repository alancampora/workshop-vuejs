<template>
    <div class="top"> 
        <h1 class="top__title"> {{ title }} </h1>
    </div>
</template>

<script>

    export default {
        name: "Top", 
        props:{
            title: {
                type: String
            }
        }
    }

</script>

<style scoped>
.top{
    background-color:black; 
    color:white;
}
.top__title{
    margin:0;
}
</style>
