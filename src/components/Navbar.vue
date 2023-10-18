<template>
    <nav class="navbar">
        <div class="toggle" @click="$emit('toggled')"></div>
        <div class="user-info">
            <h3>{{ role }} <span style="color: #fff">{{ fullname }}</span></h3>
        </div>
        <div class="user-img">
            <img :src="image" alt="">
        </div>
    </nav>
</template>
<script lang="ts">
export default {
    name: 'Navbar',
    props: {
        fullname: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>

.navbar {
    width: 100%;
    background: #003147;
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -1px 0 15px #00111a;
}

.navbar .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    cursor: pointer;
}

.toggle::before {
    content: '\f0c9';
    font-family: fontAwesome;
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 60px;
    font-size: 24px;
    text-align: center;
    color: #fff;
}

.user-info {
    color: rgb(209, 60, 6);
    letter-spacing: 1px;
}

.user-info span {
    margin-left: 10px;
}

.user-img {
    position: relative;
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    object-fit: cover;
}

.user-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>