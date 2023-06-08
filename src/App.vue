<script setup lang="ts">
import {useAppStore} from "./store";
import {onMounted, ref, watch} from "vue";

const show = ref(false)
const store = useAppStore()


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
</script>

<template>
  <div class="bg-green-500 h-screen"  >
   <button @click.prevent="show = !show">Show or Hide</button>
    <div id="modal">
      Hey Cool Name  is Emma Prime
    </div>

  </div>

</template>

<style scoped>

</style>
