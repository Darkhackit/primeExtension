<template>
            <div class="">
                <div class="bg-white p-10 rounded-[30px] space-y-3" v-if="data">
                    <p class="text-sm text-gray-500">Upcoming Birthday</p>
                    <div class="flex">
                        <p class="text-4xl font-bold">{{data[0].lastname +', '}}</p>
                        <p class="text-4xl">{{ data[0].firstname }}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500 text-red-700">{{data[0].branch.name+', '+new Date(data[0].dob).toDateString()}}</p>
                    </div>
                </div>
        
                <div class="flex items-center justify-center p-8 bg-white p-10 rounded-[30px]" v-else>
                    <Loader/>
                </div>
            </div>

</template>

<script setup>
    import {ref,onBeforeMount} from 'vue';
    import Loader from "./loader.vue"
    
    const data = ref();

    const fetchData = async () =>{
        const req = await fetch('http://10.0.0.214:40/api/employee/get_this_month_employees_b');
        const res = await req.json()
        return res;
    }

    onBeforeMount( async()=>{data.value = await fetchData()})

</script>