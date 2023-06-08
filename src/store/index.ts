import {defineStore} from 'pinia'
import {ref} from "vue";

export const useAppStore = defineStore('app',() => {
    const show  = ref(false)

    return {show}
})
