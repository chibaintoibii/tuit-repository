<template>
    <div class="card" :style="{'width': width}">
        <div class="card-name">
            <h2>
                {{ cardName }}: 
                <span class="numbers">
                    {{ cardNumber }}
                </span>
            </h2>
        </div>
        <div class="icon-box">
            <i :class="[iconClass]"></i>
        </div>
    </div>
    
</template>
<script lang="ts">
export default {
    name: 'Card',
    props: {
        width: {
            type: String,
            default: '25%'
        },
        iconClass: {
            type: String,
        },
        cardName: {
            type: String,
        },
        cardNumber: {
            type: Number,
        }
    }
}
</script>
<style scoped>
    
.card {
    position: relative;
    background: #fff;
    padding: 20px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.4s ease;
    border: 1px solid #ddd;
}

.card:hover {
    transform: scale(1.05);
}

.card .card-name {
    color: #003147;
    
} 

.card .numbers {
    margin-left: 10px;
    font-weight: 500;
}



.card .icon-box {
    font-size: 2em;
    color: #003147;
}

</style>