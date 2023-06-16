<script setup lang="ts">
import {useAppStore} from "./store";
import {onMounted, ref, watch} from "vue";
import DigitalClock from "./components/digitalClock.vue";
import Birthdays from "./components/birthdays.vue";
import Weather from "./components/weatherComponent.vue"
//import News from "./components/news.vue"

const show = ref(false)
const store = useAppStore();
const query = ref();


watch(() => store.show , () => {
  show.value = store.show
  console.log(show.value)
})
onMounted(() => {
  // setInterval(() => {
  //   if(store.show) {
  //     store.show = false
  //   }else {
  //     store.show = true
  //   }
  // },10000)
})


const searchGoogle = ()=>{
  window.location.replace(`https://google.com/search?q=${query.value}`)
}
</script>

<template>
  <div class="h-screen flex p-5">
    <div class="w-1/4 rounded-[30px] bg-red-50 p-3 space-y-5">
      <Birthdays/>
      <Weather/>
    </div>
    <div class="w-3/4 px-10 flex flex-col justify-between">
      <div class="flex flex-row justify-between text-2xl font-bold text-red-600">
        <div>{{ new Date().toDateString() }}</div>
        <div><DigitalClock/></div>
      </div>
      <div class="py-10 space-y-20">
        <div class="text-6xl">
          <h1 class="font-bold">Welcome,</h1>
          <h1>What's on your mind Today?</h1>
        </div>
        <div class="">
            <form class="space-y-2 flex flex-col" @submit.prevent="searchGoogle()">
              <input type="text" class="border block w-full text-xl px-10 py-5 rounded-full bg-gray-50" placeholder="Type here...." v-model="query"/>
              <label for="" class="text-sm text-gray-500 ml-5"><small>Search Powered by <b>Google</b></small></label>
            </form>
        </div>
        <div>
          <div class="grid grid-cols-4 gap-0.5">
            <div>
              <a href="" class="block w-full p-3 bg-red-700 rounded-[40px] text-center text-white">
                <span class="block bg-white/20 p-10 rounded-[30px] text-white text-6xl"><i class="uil uil-file-edit-alt"></i></span>
                <div class="py-5">
                  <p class="text-3xl font-bold">SIBA</p>
                  <p>Sibagen</p>
                </div>
              </a>
            </div>
            <div>
              <a href="" class="block w-full p-3 bg-gray-100 rounded-[40px] text-center text-white">
                <span class="block bg-white p-10 rounded-[30px] text-black text-6xl"><i class="uil uil-youtube"></i></span>
                <div class="py-5 text-red-700">
                  <p class="text-3xl font-bold">PRMTB</p>
                  <p>Primetube</p>
                </div>
              </a>
            </div>
            <div class="flex flex-col gap-1">         
                <a href="" class="flex flex-row flex-grow justify-between bg-red-700 rounded-[30px]">
                  <div class="text-white p-7 flex flex-col justify-center">
                    <p class="text-3xl font-bold">WKFLW</p>
                    <p>Workflow</p>
                  </div>
                  <div class="p-2">
                    <span class="px-5 block h-full bg-white/20 rounded-[30px] text-4xl flex justify-center items-center text-white"><i class="uil uil-arrow-up-right"></i></span>
                  </div>
                </a>


                <a href="" class="flex flex-row flex-grow  justify-between bg-neutral-900 rounded-[30px]">
                  <div class="text-white p-7 flex flex-col justify-center">
                    <p class="text-3xl font-bold">NIC MID</p>
                    <p>Motor Insurance DB</p>
                  </div>
                  <div class="p-2">
                    <span class="px-5 block h-full bg-white/20 rounded-[30px] text-4xl flex justify-center items-center text-white"><i class="uil uil-arrow-up-right"></i></span>
                  </div>
                </a>
  
            </div>

            <div>
              <a href="" class="block w-full p-3 bg-red-700/30 rounded-[40px] text-center text-white">
                <span class="block bg-white p-20 rounded-[30px]"></span>
                <div class="py-5 text-red-700">
                  <p class="text-3xl font-bold">FROG</p>
                  <p>Wigal SMS Portal</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>


