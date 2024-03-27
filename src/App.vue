<script setup lang="ts">
import { Carousel, Slide,Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {onMounted, ref} from "vue";
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import {Popover,Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";

const myTime = ref(new Date().toLocaleTimeString())
const myDate = ref(new Date().toDateString())
const greet = ref("Good Morning")
const leaves = ref([])

const setTime = () => {
  myTime.value = new Date().toLocaleTimeString()
  myDate.value = new Date().toDateString()
  greeting()
}

const greeting = () => {
  let dt = new Date().getHours()
  if (dt < 12) {
    greet.value = "Good Morning"
  }else if (dt < 18) {
    greet.value = "Good Afternoon"
  }else {
    greet.value = "Good Evening"
  }
}
const get_leave = async () => {
  try {
    let response = await fetch('http://10.0.0.11:3100/api/leave',{
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    })
    leaves.value = await response.json()
  }catch (e) {
    console.log(e)
  }
}

const open = ref(false)
setInterval(() => {
  setTime()
},1000)

const news = ref([])

const comments = ref([])
const notices = ref([])
const todayBirthdays = ref([])
const name = ref("")
const email = ref("")
const id = ref("")
const branch = ref("")
const background = ref("")

const blogs = ref([])
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Notice Board', href: 'http://10.0.0.11/notice_board', current: false },
  { name: 'Knowledge Base', href: 'http://10.0.0.11/knowledge_base', current: false },
  { name: 'Personality Profile', href: 'http://10.0.0.11/personality', current: false },
  { name: 'Employees Directory', href: 'http://10.0.0.11/employees_directory', current: false },
  { name: 'Past Employees Directory', href: 'http://10.0.0.11/past_employees_directory', current: false },
]

const quickLinks = ref([])

const getLinks = async () => {
  try {
    let response = await fetch('http://10.0.0.11:3100/api/get-links',{
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    })
    quickLinks.value = await response.json()
  }catch (e) {
    console.log(e)
  }
}
const getPost = async () => {
  try {
    let response = await fetch('http://10.0.0.11:3100/api/post',{
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    })
   let result = await response.json()
    news.value = result.slice(0,50)
    blogs.value = result.slice(51,60)
    comments.value = result.slice(60,70)

    console.log(blogs.value)
    console.log(news.value)
  }catch (e) {
    console.log(e)
  }
}
const getTodayBirthDay = async () => {
  try {
    let response = await fetch('http://10.0.0.11:50/api/get_today_employees',{
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    })
    todayBirthdays.value = await response.json()
  }catch (e) {
    console.log(e)
  }
}

const getNotices = async () => {
  try {
    let response = await fetch('http://10.0.0.11:3100/api/get_notices',{
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    })
     let notice = await response.json()
    notices.value = notice.slice(0,6)

  }catch (e) {
    console.log(e)
  }
}


const accept = () => {
  localStorage.setItem('agreed',true)
  open.value = false
}

const userInfo = () => {
  localStorage.setItem("name","JOEL LARTEY")
  localStorage.setItem("email","jalartey@primeinsuranceghana.com")
  localStorage.setItem("branch","Head Office")
  localStorage.setItem("id",String(17110))

  name.value = localStorage.getItem("name")
  email.value = localStorage.getItem("email")
  id.value = localStorage.getItem("id")
  branch.value = localStorage.getItem("branch")
}

const get_background = async () => {
  try {
    let response = await fetch('http://10.0.0.11:3100/api/get_current_background')
    background.value = await response.json()
  }catch (e) {

  }
}



onMounted(async () => {

  open.value = !JSON.parse(localStorage.getItem('agreed'));
  userInfo()
  await get_background()
  await getLinks()
  await getTodayBirthDay()
  await getPost()
  await getNotices()
  await get_leave()
})
</script>
<template>
  <div class="min-h-full ">
    <Popover as="header" class="relative" v-slot="{ open }">
      <div class="absolute w-full h-full">
        <img :src="background.image" alt="bg-img" class="w-full h-full object-cover"/>
      </div>
      <div class="p-10 relative">
        <nav class="">
          <div class="text-white flex justify-between items-center">
            <a href="/"><img src="./assets/logo_w.svg" class=""/></a>
            <ul class="flex space-x-5 items-center">
              <li><p>{{branch}}</p></li>
              <li><span class="text-xs flex justify-center items-center bg-white rounded-full text-red-700 h-[30px] w-[30px] font-bold">HO</span></li>
            </ul>
          </div>
        </nav>
        <div class="py-20 mb-20 flex justify-between">
          <div class="space-y-5 p-2 rounded-xl backdrop-blur-sm bg-white/30">
            <div class="text-white">         
              <h1 class="text-base font-semibold">{{greet}}, {{name}}</h1>
            </div>
            <div>
              <h1 class="text-5xl text-white">Welcome to Prime <br> <span class="font-bold">Intranet.</span></h1>
            </div>
          </div>
          <div class="w-1/2 space-y-5 p-2 rounded-xl backdrop-blur-sm bg-white/30">
            <p class="text-sm text-white">Quick Links</p>
            <div class="grid grid-cols-4 gap-5">
                <a target="_blank" :href="item.description" v-for="(item,index) in quickLinks" @click="gotoLink(item.description)" :key="index" class="border rounded-xl hover:bg-red-500 border-white uppercase p-4 flex items-center  space-x-2 text-left">
                        <span class="h-[30px] bg-red-500 p-1 rounded-full"><img :src="item.favicon" class="h-full"/></span>
                        <p class="text-white text-sm font-bold">{{ item.name }}</p>
                </a>
            </div>
          </div>
        </div>
      </div>
    </Popover>
    <main class="-mt-20 pb-8">
      <div class="mx-auto  px-4 sm:px-6  lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-2 lg:col-span-2 z-10">
            <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white">
                <div class="p-4 min-h-screen">
                  <div>
                    <nav class="flex space-x-4 pb-5">
                      <a v-for="item in navigation" :key="item.name" :href="item.href" target="_blank" :class="[item.current ? 'text-gray-900' : 'text-gray-900', 'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                    </nav>
                  </div>
                  <div>
                    <div class="flex space-x-10">
                      <div class="w-2/3">
                        <Carousel :autoplay="4000" :wrap-around="true">
                          <Slide v-for="(slide,index) in news" :key="index">
                            <div class="max-h-full rounded-xl relative w-[100%] h-[400px]">
                              <img alt="Banner 1" :src="slide.image" class="w-full h-full object-cover object-center rounded-3xl">
                              <div class="absolute w-full h-full top-0 left-0 rounded-xl bg-gradient-to-t from-black/75  flex flex-col justify-end ">
                                <div class="px-10 py-5 space-y-2">
                                  <div class="flex space-x-2">
                                    <h1 class="text-white text-xl font-bold">{{ slide.title }}</h1>
                                  </div>

                                  <div class="flex space-x-2">
                                    <p class="text-xs text-gray-400">{{slide.date }},</p>
                                    <p class="text-xs text-gray-400">Author</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <template #addons>
                            <Navigation class="text-white hover:text-white"/>
                          </template>
                        </Carousel>
                      </div>
                      <div class="w-1/3 flex flex-col justify-between border p-10 rounded-xl bg-red-700 text-white">
                        <div class="">
                          <div class="items-center justify-center space-y-2">
                            <h1 class="text-4xl font-bold">{{myDate}}</h1>
                            <p class="text-4xl">{{myTime}}</p>
                          </div>
                        </div>
                        <div class="space-y-5">
                          <div class="flex space-x-2">
                            <span v-if="todayBirthdays.length" v-for="birthday in todayBirthdays" class="h-[100px] w-[100px] rounded-full block border">
                              <span class="block bg-white h-full w-full rounded-full">
                                <img :src="birthday.image" :alt="birthday.name" class="w-full h-full object-cover rounded-full">
                              </span>
                            </span>
                            <span class="text-base font-bold"  v-else>
                              No Birthday Celebrants
                            </span>
                          </div>
                          <div class="space-y-1">
                            <p class="text-base font-bold">Birthday Celebrants</p>
                            <button class="text-xs border-b border-b-red-500 border-bottom pb-1">View Calendar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="py-10">
                    <div>
                      <h2 class="font-medium">Blogs</h2>
                    </div>
                    <div class="flex">
                      <ul class="w-[60%] divide divide-y divide-gray-150">
                          <li v-for="blog in blogs" :key="blog" class="space-y-3 py-10">
                            <div class=" space-x-3 text-sm flex items-center">
                              <span class="block h-[20px] w-[20px] rounded-full">
                                <img :src="blog.image" alt="profile" class="w-full h-full object-cover rounded-full">
                              </span>
                              <span>Vanessa B.✨ </span>
                              <span class="text-gray-600">{{blog.date}}</span>
                            </div>
                            <div class="flex items-center">
                              <div class="space-y-2">
                                <h1 class="font-bold text-xl ">{{blog.title}}</h1>
                                <p class="w-[90%] text-sm">
                                  {{blog.description}}
                                </p>
                              </div>
                              <div class=" w-1/3">
                                <div class="h-[150px] w-[150px]">
                                  <img :src="blog.image" alt="banner" class="object-cover w-full h-full rounded-xl "/>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="text-xs flex items-center space-x-3">
                                <span class="bg-slate-100 py-1 px-2 block rounded-xl">HR/Admin</span>
                                <span>4 min read</span>
                              </div>
                              <div>
  
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="px-20 w-[40%]">
                            <ul>
                              <li v-for="blog in comments" :key="blog" class="space-y-2 py-5">
                              <div class=" space-x-3 text-xs flex items-center">
                                <span class="block h-[20px] w-[20px] rounded-full">
                                  <img :src="blog.image" alt="profile" class="w-full h-full object-cover rounded-full">
                                </span>
                                <span class="text-gray-600">{{blog.date}}</span>
                              </div>
                              <div class="flex items-center">
                                <div class="space-y-2">
                                  <h1 class="font-bold ">{{blog.title}}</h1>
                                </div>
                              </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 z-10">
            <section aria-labelledby="section-2-title">
              <div class="overflow-hidden rounded-lg bg-white ">
                <div class="p-6 min-h-screen">
                  <div class="flex justify-between space-y-0">
                    <h1 class="font-semibold text-sm">Notices</h1>
                    <a target="_blank" href="http://localhost:5173/notice_board" class="text-sm">View all</a>
                  </div>
                  <div class="mt-5">
                    <ul role="list" class="space-y-5">
                      <li v-for="comment in notices" :key="comment.id" class="p-5 rounded-xl border border-gray-100">
                        <div class="w-full">
                          <div class="flex justify-between items-center">
                            <div class="flex justify-between items-center">
                              <div class="flex space-x-2 items-center">
                              <span class="block h-[20px] w-[20px] rounded-full">
                                    <img src="https://images.pexels.com/photos/5021754/pexels-photo-5021754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" class="w-full h-full object-cover rounded-full">
                                </span>
                                <p class="text-sm font-semibold leading-6 text-gray-900">{{ comment.title }}</p>
                              </div>
                            </div>
                            <div>
                              <p class="text-xs text-gray-600">
                                <time :datetime="comment.dateTime">{{ comment.date }}</time>
                              </p>
                            </div>
                          </div>
                          <p class="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{{ comment.description }}</p>
                        </div>
                      </li>
                      <li><a target="_blank" href="http://localhost:5173/notice_board"  class="block w-full text-center text-sm text-gray-500"> Load More</a></li>
                    </ul>
                  </div>

                  <div class="mt-10 space-y-5">
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-sm">Employees On Leave</h1>
                    </div>
                    <div>
                      <ul role="list" class="grid grid-cols-2 gap-5">
                        <li v-for="item in leaves.data" :key="item.id" class="px-4 py-4 border rounded-xl space-y-4 hover:bg-red-50 cursor-pointer">
                          <div class="flex items-center ">
                            <h3 class="flex-auto  text-sm leading-6">{{ item.FullName }}</h3>
                          </div>
                          <div class="flex justify-between">
                            <h3 class="flex-auto  text-sm leading-6">Dur:</h3>
                            <h3 class="flex-auto  text-sm leading-6">{{ item.Duration }}</h3>
                          </div>
                          <div class="flex justify-between ">
                            <h3 class="flex-auto  text-sm leading-6">Return:</h3>
                            <h3 class="flex-auto  text-sm leading-6">{{ item.ResumptionDate }}</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="border-t border-gray-200 py-8 text-sm text-gray-500 flex justify-center"><span class="block sm:inline">&copy; 2023 Prime Insurance, Inc.</span> <span class="block sm:inline">All rights reserved.</span></div>
      </div>
    </footer>

    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = true">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="open = true">
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">** Disclaimer **</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Welcome to prime intranet! This intranet serves as a blog and includes features such as displaying your picture on the page on your birthday and as a noticeboard.
                        Please note that the images displayed on this page are for recreational purposes only. By clicking on accept, you agree that the images shown are meant for entertainment and company culture enhancement purposes. If you have any concerns or objections regarding the use of your image, please contact us immediately. Thank you for your understanding and cooperation.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="accept">Accept</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>