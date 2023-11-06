<script setup lang="ts">
import { Carousel, Slide,Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref} from "vue";
import {Popover} from "@headlessui/vue";

const myTime = ref(new Date().toLocaleTimeString())
const myDate = ref(new Date().toDateString())
const greet = ref("Good Morning")

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


setInterval(() => {
  setTime()
},1000)

const news = ref([
  {
    image:'https://res.cloudinary.com/dubea2mve/image/upload/v1699259936/prime/eihzpg8sobb39imhch7i.jpg',
  },
  {
    image:'https://res.cloudinary.com/dubea2mve/image/upload/c_crop,g_auto,h_500,w_500/prime/kygfzf0zm5pcumaykotx.jpg'
  },
  {
    image:'https://res.cloudinary.com/dubea2mve/image/upload/v1699259935/prime/t2iqfzi0teu7qsmkeepy.jpg'
  },
  {
    image:'https://res.cloudinary.com/dubea2mve/image/upload/v1699259935/prime/xk0kw8eh1hv1ybgawoyd.jpg'
  },
  {
    image:'https://res.cloudinary.com/dubea2mve/image/upload/v1699259935/prime/pvkptcbbhwgfgoqb0jqg.jpg'
  },
])

const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'mobile-api',
    commit: '249df660',
    branch: 'main',
    date: '3h',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '11464223',
    branch: 'main',
    date: '12h',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'tailwindui.com',
    commit: 'dad28e95',
    branch: 'main',
    date: '2d',
    dateTime: '2023-01-21T13:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'relay-service',
    commit: '624bc94c',
    branch: 'main',
    date: '5d',
    dateTime: '2023-01-18T12:34',
  },
]
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content:
        'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
    date: '1d ago',
    dateTime: '2023-03-04T15:54Z',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content:
        'Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.',
    date: '2d ago',
    dateTime: '2023-03-03T14:02Z',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content:
        'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
    date: '2d ago',
    dateTime: '2023-03-03T13:23Z',
  },
]


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Notice Board', href: 'http://localhost:5173/notice_board', current: false },
  { name: 'Knowledge Base', href: 'http://localhost:5173/knowledge_base', current: false },
  { name: 'Company Directory', href: '', current: false },
  { name: 'Employees Directory', href: 'http://localhost:5173/employees_directory', current: false },
]

const quickLinks = [
    {
      name:'SibaGen',
      href:'https://live.sibagenprimeinsuranceghana.com/',
      favicon:'https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png'
    },
    {
      name:'Mapfre',
      href:'https://warranty-neu.mia-assistance.com/',
      favicon:'https://agents.mapfreinsurance.com/favicon.ico'
    },
    {
      name:'NICMID',
      href:'https://live.nicmid.com/',
      favicon:'https://live.nicmid.com/img/logo-single.png'
    },
    {
      name:'Ipay',
      href:'https://dashboard.ipaygh.com/',
      favicon:'https://dashboard.ipaygh.com/content/resources/img/favicon.ico'
    },
    {
      name:'FROG',
      href:'https://frog.wigal.com.gh/login',
      favicon:'https://frog.wigal.com.gh/images/favicon.ico'
    },
    {
      name:'Workflow',
      href:'http://10.0.0.22/seeddms-6.0.12/out/out.Login.php?referuri=%2Fseeddms-6.0.12%2Fout%2Fout.UsrMgr.php%3Fuserid%3D76',
      favicon:'http://10.0.0.22/seeddms-6.0.12/styles/bootstrap/favicon.ico'
    },
    {
      name:'Whatsapp',
      href:'https://web.whatsapp.com/',
      favicon:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png'
    },
  {
    name:'Ticket',
    href:'https://ticket.primeinsuranceghana.com/',
    favicon:'https://www.primeinsuranceghana.com/img/fav.png'
  }
]

</script>
<template>
  <div class="min-h-full ">
    <Popover as="header" class="bg-gradient-to-br from-red-700 to-red-800 bg-cover pb-24 " v-slot="{ open }">
      <div class="p-10">
        <nav class="">
          <div class="text-white flex justify-between items-center">
            <a href="/"><img src="./assets/logo_w.svg" class=""/></a>
            <ul class="flex space-x-5 items-center">
              <li><p>Head Office</p></li>
              <li><span class="text-xs flex justify-center items-center bg-white rounded-full text-red-700 h-[30px] w-[30px] font-bold">MS</span></li>
            </ul>
          </div>
        </nav>
        <div class="py-14 flex justify-between">
          <div class="space-y-5">
            <div class="text-white">         
              <h1 class="text-base font-semibold">{{greet}}, Emmanuel Arthur</h1>
            </div>
            <div>
              <h1 class="text-5xl text-white">Welcome to Prime <br> <span class="font-bold">Intranet.</span></h1>
            </div>
          </div>
          <div class="w-1/2 space-y-5">
            <p class="text-sm text-white">Quick Links</p>
            <div class="grid grid-cols-4 gap-5">
                <a target="_blank" :href="item.href" v-for="(item,index) in quickLinks" @click="gotoLink(item.href)" :key="index" class="border rounded-xl hover:bg-red-500 border-red-500 uppercase p-4 flex items-center  space-x-2 text-left">
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
                                    <h1 class="text-white text-xl font-bold">Title</h1>
                                  </div>
                                  <div class="flex space-x-2">
                                    <p class="text-white ">The world revolves around us. We are chosen to be more...</p>
                                  </div>
                                  <div class="flex space-x-2">
                                    <p class="text-xs text-gray-400">{{ new Date().toDateString()}},</p>
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
                            <span class="h-[100px] w-[100px] rounded-full block border">
                              <span class="block bg-white h-full w-full rounded-full">
                                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full h-full object-cover rounded-full">
                              </span>
                            </span>
                            <span class="h-[100px] w-[100px] rounded-full block border">
                              <span class="block bg-white h-full w-full rounded-full">
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full h-full object-cover rounded-full">
                              </span>
                            </span>
                            <span class="h-[100px] w-[100px] rounded-full block border">
                              <span class="block bg-white h-full w-full rounded-full">
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full h-full object-cover rounded-full">
                              </span>
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
                          <li v-for="blog in 3" :key="blog" class="space-y-3 py-10">
                            <div class=" space-x-3 text-sm flex items-center">
                              <span class="block h-[20px] w-[20px] rounded-full">
                                <img src="https://images.pexels.com/photos/5021754/pexels-photo-5021754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" class="w-full h-full object-cover rounded-full">
                              </span>
                              <span>Vanessa B.✨ </span>
                              <span class="text-gray-600">August 19</span>
                            </div>
                            <div class="flex items-center">
                              <div class="space-y-2">
                                <h1 class="font-bold text-xl ">Annual Staff Durbar and Destress Tour</h1>
                                <p class="w-[90%] text-sm">
                                  It’s August in Northern Virginia, hot and humid. I still haven’t showered from my morning trail run. I’m wearing my stay-at-home mom uniform — over-sized Marine Corps sweats, tshirt, Crocs flip flops,
                                </p>
                              </div>
                              <div class=" w-1/3">
                                <div class="h-[150px] w-[150px]">
                                  <img src="./assets/bg.jpeg" alt="banner" class="object-cover w-full h-full rounded-xl grayscale"/>
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
                              <li v-for="blog in 3" :key="blog" class="space-y-2 py-5">
                              <div class=" space-x-3 text-xs flex items-center">
                                <span class="block h-[20px] w-[20px] rounded-full">
                                  <img src="https://images.pexels.com/photos/5021754/pexels-photo-5021754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" class="w-full h-full object-cover rounded-full">
                                </span>
                                <span class="text-gray-600">August 19</span>
                              </div>
                              <div class="flex items-center">
                                <div class="space-y-2">
                                  <h1 class="font-bold ">10 Seconds That Ended My 20 Year Marriage</h1>

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
                    <a href="/" class="text-sm">View all</a>
                  </div>
                  <div class="mt-5">
                    <ul role="list" class="space-y-5">
                      <li v-for="comment in comments" :key="comment.id" class="p-5 rounded-xl border border-gray-100">
                        <div class="w-full">
                          <div class="flex justify-between items-center">
                            <div class="flex justify-between items-center">
                              <div class="flex space-x-2 items-center">
                              <span class="block h-[20px] w-[20px] rounded-full">
                                    <img src="https://images.pexels.com/photos/5021754/pexels-photo-5021754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" class="w-full h-full object-cover rounded-full">
                                </span>
                                <p class="text-sm font-semibold leading-6 text-gray-900">{{ comment.name }}</p>
                              </div>
                            </div>
                            <div>
                              <p class="text-xs text-gray-600">
                                <time :datetime="comment.dateTime">{{ comment.date }}</time>
                              </p>
                            </div>
                          </div>
                          <p class="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{{ comment.content }}</p>
                        </div>
                      </li>
                      <li><button class="block w-full text-sm text-gray-500"> Load More</button></li>
                    </ul>
                  </div>

                  <div class="mt-10 space-y-5">
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-sm">Employees On Leave</h1>
                    </div>
                    <div>
                      <ul role="list" class="grid grid-cols-3 gap-5">
                        <li v-for="item in activityItems" :key="item.commit" class="px-4 py-4 border rounded-xl space-y-4 hover:bg-red-50 cursor-pointer">
                          <span class="block h-[50px] w-[50px] rounded-full">
                                    <img src="https://images.pexels.com/photos/5021754/pexels-photo-5021754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" class="w-full h-full object-cover rounded-full">
                          </span>
                          <div class="flex items-center gap-x-3">
                            <h3 class="flex-auto truncate text-sm leading-6">{{ item.user.name }}</h3>
                            <time :datetime="item.dateTime" class="flex-none text-xs text-gray-500">{{ item.date }}</time>
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
  </div>
</template>