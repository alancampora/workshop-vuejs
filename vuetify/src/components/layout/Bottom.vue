<template>
    <div class="bottom"> 
        <slot name="content"></slot>
    </div>
</template>

<script>

    export default {
        name: "Bottom"
    }

</script>

<style scoped>
.bottom{
    padding: 20px;
}
</style>
