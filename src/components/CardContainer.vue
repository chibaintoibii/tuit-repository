<template>
    <div class="card-container">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: 'CardContainer',
}
</script>
<style scoped>
 .card-container{
    width: 100%;
    padding: 20px;
    display: flex;
    grid-gap: 20px;
}   
</style>