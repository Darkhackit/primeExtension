<template>
    <div>{{ time + ' GMT' }}</div>
</template>

<script setup>
import {ref,onMounted} from 'vue';

const time = ref('');

var timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    var cd = new Date();
    time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

onMounted(()=>updateTime())
</script>