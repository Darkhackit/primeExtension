<script setup>
    import {ref, onBeforeMount} from "vue";
    import Loader from "./loader.vue";
    const api_key = '5c3fbf76e83ea263aa912fc7b1aa5135';
    const weatherData = ref();
    const endpoint = '';

    const fetchWeather = async(lat,long)=>{
        const req = await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`);
        const res = await req.json();

        weatherData.value = res;

    }

    onBeforeMount(async()=>{
            await navigator.geolocation.getCurrentPosition((position)=>{
                    fetchWeather(position.coords.latitude,position.coords.longitude);
                },(error)=>{
                    console.log('Gelocation is Disabled or Not Allowed')
            });

    })
</script>
<template>
    <div class="">
        <div class="mt-10  bg-gradient-to-r border border-slate-150 from-white rounded-[30px]">
            <div>
                <p class=""></p>
            </div>
            <div v-if="weatherData" class="relative">
                <div class="space-y-2 p-8">
                    <p class="text-4xl font-bold">{{ (parseFloat(weatherData.main.temp)-273.15).toFixed(2) }}<sup>o</sup> C</p>
                    <div class="flex text-sm space-x-3 text-gray-500 ">
                        <p class="capitalize text-sm font-bold">{{ weatherData.weather[0].description }}</p>
                        <p><i class="uil uil-tear"></i> {{ weatherData.main.humidity}}%</p>
                        <p><i class="uil uil-wind"></i> {{ (parseFloat(weatherData.wind.speed)*3.6).toFixed(2)}} km/h</p>
                        <p><i class="uil uil-location-point"></i> {{ weatherData.name +', '+weatherData.sys.country }}</p>
                    </div>
                </div>
    
                <div class="absolute top-0 right-10 backdrop-blur border border-slate-100 rounded-full">
                    <img class="w-[70px]" :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="">
                </div>
    
            </div>
            <div class="flex items-center justify-center p-8" v-else>
                <Loader/>
            </div>
        </div>
    </div>
</template>