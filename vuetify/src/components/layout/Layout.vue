<template>
    <div class="Layout">        
        <slot name="top">
        </slot>    

        <slot name="content">
        </slot>
    </div>
</template>

<script>
    export default{
        name: "Layout"
    }
</script>
