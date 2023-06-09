<script setup lang="ts">
import {useAppStore} from "./store";
import {onMounted, ref, watch} from "vue";
import DigitalClock from "./components/digitalClock.vue";
import Birthdays from "./components/birthdays.vue";
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
  window.open(`https://google.com/search?q=${query.value}`)
}
</script>

<template>
  <div class="min-h-screen h-screen w-full bg-gray-50 flex">
    <div class="main w-3/4 relative">
      <div class="h-full w-full absolute backdrop-blur-sm top-0 left-0 -z-1"></div>
      <div class="h-full w-full absolute bg-gradient-to-b from-white/80 from-20% via-red-500/20 via-30% to-white to-90% top-0 left-0 -z-1"></div>

      <div class="z-20 absolute w-full top-0 left-0 p-10">
          <div class="flex flex-row justify-between">
            <div>
              <img src="https://www.primeinsuranceghana.com/img/logo.png" alt="logo" class="w-[120px]"/>
            </div>
            <div>{{ new Date().toDateString() }}</div>
          </div>
    
          <div class="py-10 flex justify-between">
            <div class="">
              <h1 class="text-3xl font-bold">Welcome,<br/>What’s on you mind today?</h1>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-red-600"><DigitalClock/></h1>
            </div>
          </div>
    
          <div class="my-10">
            <form @submit.prevent="searchGoogle()" class="space-y-4">
              <div><p class="text-sm text-white">Search Powered by Google.</p></div>
              <input class="w-full border text-2xl p-3 rounded-xl bg-gray-50 focus:outline-red-500" placeholder="Search" v-model="query"/>
            </form>
          </div>
    
          <div class="py-10">
            <div><h1 class="text-sm">Quick Links</h1></div>
            <div class="grid grid-cols-8 gap-7 mt-5">
              <div class="">
                <a href="https://live.sibagenprimeinsuranceghana.com/" class="block bg-red-50 font-bold text-red-600 p-5  text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  SIBA
                  <p class="text-xs font-normal">Sibagen</p>
                </a>
              </div>
              <div class="">
                <a href="http://10.0.0.214:5173/" class="block  font-bold text-red-600 p-5 bg-red-50 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  PRMTB
                  <p class="text-xs font-normal">Prime Tube</p>
                </a>
              </div>
    
              <div class="">
                <a href="https://ticket.primeinsuranceghana.com/" class="block  font-bold bg-red-50 text-red-600 p-5 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  TKT
                  <p class="text-xs font-normal">Ticketing</p>
                </a>
              </div>
    
              <div class="">
                <a href="https://dashboard.ipaygh.com/" class="block  font-bold bg-black text-white p-5 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  IPAY
                  <p class="text-xs font-normal">IPAY Portal</p>
                </a>
              </div>
              <div class="">
                <a href="https://live.nicmid.com/" class="block  font-bold bg-black text-white p-5 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  MID
                  <p class="text-xs font-normal">NIC MID</p>
                </a>
              </div>
    
              <div class="">
                <a href="https://live.nicmid.com/" class="block  font-bold bg-black text-white p-5 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  FROG
                  <p class="text-xs font-normal">WIGAL SMS</p>
                </a>
              </div>
    
              <div class="">
                <a href="https://live.nicmid.com/" class="block  font-bold bg-black text-white p-5 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  WKFLW
                  <p class="text-xs font-normal">Workflow</p>
                </a>
              </div>
              <div class="">
                <a href="https://evote.primeinsuranceghana.com/" class="block  font-bold bg-black text-white p-5 text-center rounded-xl text-xl border border-red-200 hover:bg-red-600 hover:text-white duration-75" target="_blank">
                  VOTING
                  <p class="text-xs font-normal">Evoter</p>
                </a>
              </div>
      </div>

        </div>
       <!--
        <div>
         <div><h1 class="text-sm">News Feed</h1></div>
         <div>
           <News/>
         </div>
       </div>
      --> 
      </div>


    </div>
    <div class="w-1/4 p-10 bg-black">
      <Birthdays/>
    </div>
  </div>
</template>


