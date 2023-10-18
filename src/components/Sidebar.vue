<template>
    <div class="sidebar">
        <div class="menu-group">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Sidebar',
    components: {
    }
}
</script>
<style scoped>
.sidebar {
    position: fixed;
    width: 264px;
    height: 100%;
    background: #003147;
    transition: 0.5s;
    overflow: hidden;
}

.sidebar.toggled {
    width: 60px;
}

.sidebar .menu-group {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>