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
    text-align: center;
    padding: 10px;
}
.top__title {
    margin:0;
}
</style>
