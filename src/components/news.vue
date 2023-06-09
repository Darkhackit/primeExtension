<template>
    <div>
        <div v-if="newsData">
            <div v-for="(article,index) in newsData" :key="index"></div>
        </div>
    </div>
</template>
<script setup>
    import {ref,onBeforeMount} from 'vue';

    const api_key = '5ee7e559dc5e4d39853172e596fa49a8';
    const newsData = ref('');


    const fetchData = async ()=>{
        const req = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${api_key}`);

        const res = await req.json();

        return res;
    }

    onBeforeMount(async()=>{
        newsData.value = await fetchData();
        console.log(newsData.value)
    })

</script>