<template>
    <div>
        <div class="">
            <p class="text-sm text-gray-500">Upcoming Birthday</p>
            <div class=" mt-5"  v-if="data">
                <div class="space-y-3 border-b border-gray-800 py-5">
                    <p class="text-xl text-white capitalize">{{ data[0].firstname+ ' ' + data[0].lastname + " 🥳 "}}</p>
                    <div>
                        <p class="text-sm text-gray-500">{{data[0].branch.name+', '+new Date(data[0].dob).toDateString()}}</p>
                    </div>
                </div>
        
            </div>
            <div v-if="data" class="mt-10">
                <p class="text-sm text-gray-500">Month Birthdays</p>
                <div>
                    <div class="space-y-3 py-5" v-for="(item,index) in data.slice(1)" :key="index">
                        <p class="text-white capitalize text-sm">{{ item.firstname+ ' ' + item.lastname}}</p>
                        <div>
                            <p class="text-xs text-gray-500">{{new Date(item.dob).toDateString()}}</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref,onBeforeMount} from 'vue';
    
    const data = ref();

    const fetchData = async () =>{
        const req = await fetch('http://10.0.0.214:40/api/employee/get_this_month_employees_b');
        const res = await req.json()
        return res;
    }

    onBeforeMount( async()=>{data.value = await fetchData()})

</script>