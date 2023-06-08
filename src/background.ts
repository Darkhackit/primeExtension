import {createPinia} from "pinia";
import {useAppStore} from "./store";
const pinia = createPinia()
const store = useAppStore(pinia)
setInterval(() => {
    if(store.show) {
        store.show = false
    }else {
        store.show = true
    }
},10000)

