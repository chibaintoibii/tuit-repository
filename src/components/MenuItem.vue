<template>
    <li>
        <router-link :to="link">
            <div class="icon">
                <img v-if="hasImg" :src="imgURL" alt="" />
                <i v-else :class="[iconClass]"></i>
            </div>
            <div class="title"><span>{{ title }}</span></div>
        </router-link>
    </li>
</template>
<script lang="ts">
export default {
    name: 'MenuItem',
    props: {
        hasImg: {
            type: Boolean,
        },
        imgURL: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
        },
        link: {
            type: String,
            default: '/'
        },
    }
}
</script>
<style scoped>
li {
    width: 100%;
    list-style: none;
    transition: all 0.7s ease;
}

li:hover {
    background: #d6e1f1;
}

li:nth-child(1) {
    margin-bottom: 20px;
}

li:nth-child(1) a .title span {
    font-size: 24px;
    font-weight: 700;
}

li:nth-child(1):hover {
    background: transparent;
    color: #fff;
}

li:nth-child(1):hover a div,
li:nth-child(1):hover a div > i {
    color: #fff;
}


li:hover a div,
li:hover a div > i {
    color: #003147;
}

li:last-child:hover {
    background-color: transparent;
}

li:last-child:hover a div,
li:last-child:hover a div > i{
    color: red;
}

li a {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
}

li a.active {
    background: #1e5287;
}

li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}


li a .icon img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    padding: 10px;
}


li a .icon i {
    color: #fff;
    font-size: 24px;
}

li a .title {
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
}  
</style>