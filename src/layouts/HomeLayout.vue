<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
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
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#'},
  { name: 'Sign out', href: '#' },
]
</script>
<template>
  <div class="min-h-full ">
    <Popover as="header" class="bg-[url('./assets/bg.jpeg')] bg-cover pb-24 " v-slot="{ open }">
      <div class="mx-auto px-16 w-full pb-24 backdrop-blur ">
        <div class="relative flex items-center justify-center py-5  lg:justify-between">
          <!-- Logo -->
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://www.primeinsuranceghana.com/img/logo.png" alt="Your Company" />
            </a>
          </div>

          <!-- Right section on desktop -->
          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <button type="button" class="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-4 flex-shrink-0">
              <div>
                <MenuButton class="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <!-- Search -->
          <div class="min-w-0 flex-1 px-12 lg:hidden">
            <div class="mx-auto w-full max-w-xs">
              <label for="desktop-search" class="sr-only">Search</label>
              <div class="relative text-white focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="desktop-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
              </div>
            </div>
          </div>

          <!-- Menu button -->
          <div class="absolute right-0 flex-shrink-0 lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="hidden border-t border-white border-opacity-20 py-5 lg:block">
          <!-- Links to -->
          <div class="flex  items-center justify-center space-x-20 ">
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-red-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
            <div class="text-center space-y-2">
              <button type="button" class="rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                <img src="https://live.sibagenprimeinsuranceghana.com/Content/Images/ui/v2/favicon-clear_1favicon-clear.png" />
              </button>
              <p class="text-white font-semibold">SibaGen</p>
            </div>
          </div>
          <!-- Links to -->
          <div class="grid grid-cols-3 items-center gap-8">
            <div class="col-span-2">
              <nav class="flex space-x-4">
                <!--                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'text-white' : 'text-indigo-100', 'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>-->
              </nav>
            </div>
            <div>
              <div class="mx-auto w-full max-w-md">
                <!--                <label for="mobile-search" class="sr-only">Search</label>-->
                <!--                <div class="relative text-white focus-within:text-gray-600">-->
                <!--                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">-->
                <!--                    <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />-->
                <!--                  </div>-->
                <!--                  <input id="mobile-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />-->
                <!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <TransitionRoot as="template" :show="open">
        <div class="lg:hidden">
          <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <PopoverOverlay class="fixed inset-0 z-20 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
              <div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="pb-2 pt-3">
                  <div class="flex items-center justify-between px-4">
                    <div>
                      <img class="h-8 w-auto" src="https://www.primeinsuranceghana.com/img/logo.png" alt="Your Company" />
                    </div>
                    <div class="-mr-2">
                      <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="mt-3 space-y-1 px-2">
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Home</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Profile</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Resources</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Company Directory</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Openings</a>
                  </div>
                </div>
                <div class="pb-2 pt-4">
                  <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                    </div>
                    <div class="ml-3 min-w-0 flex-1">
                      <div class="truncate text-base font-medium text-gray-800">{{ user.name }}</div>
                      <div class="truncate text-sm font-medium text-gray-500">{{ user.email }}</div>
                    </div>
                    <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div class="mt-3 space-y-1 px-2">
                    <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </TransitionChild>
        </div>
      </TransitionRoot>
    </Popover>
    <main class="-mt-48 pb-8">
      <div class="mx-auto  px-4 sm:px-6  lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-2 lg:col-span-2 z-10">
            <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white   shadow">
                <div class="p-6 min-h-screen">
                  <div>
                    <nav class="flex space-x-4">
                      <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'text-gray-900' : 'text-gray-900', 'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                    </nav>
                  </div>
                  <div>
                    <div class="grid grid-cols-1 space-y-2 lg:space-y-0 items-start lg:grid-cols-3 lg:gap-8">
                      <div class="grid grid-cols-1 lg:col-span-2 bg-red-300 h-56 rounded"></div>
                      <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 mt-4 lg:gap-8">
                    <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                    <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                    <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                  </div>
                  <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 mt-4 lg:gap-8">
                    <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                    <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                    <div class="grid grid-cols-1 bg-blue-300 h-56 rounded "></div>
                  </div>

                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 z-10">
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6 min-h-screen">
                  <div class="flex justify-between">
                    <h1 class="text-lg font-semibold">Notices</h1>
                    <p>view all</p>
                  </div>
                  <hr>
                  <div class="mb-4">
                    <ul role="list" class="divide-y divide-gray-100">
                      <li v-for="comment in comments" :key="comment.id" class="flex gap-x-4 py-5">
                        <div class="flex-auto">
                          <div class="flex items-baseline justify-between gap-x-4">
                            <p class="text-sm font-semibold leading-6 text-gray-900">{{ comment.name }}</p>
                            <p class="flex-none text-xs text-gray-600">
                              <time :datetime="comment.dateTime">{{ comment.date }}</time>
                            </p>
                          </div>
                          <p class="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">{{ comment.content }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <h1 class="text-lg font-semibold">Employees Birthday</h1>
                    </div>
                    <hr>
                    <div>
                      <ul role="list" class="divide-y divide-gray-100">
                        <li v-for="item in activityItems" :key="item.commit" class="py-4">
                          <div class="flex items-center gap-x-3">
                            <h3 class="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{{ item.user.name }}</h3>
                            <time :datetime="item.dateTime" class="flex-none text-xs text-gray-500">{{ item.date }}</time>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <h1 class="text-lg font-semibold">Employees On Leave</h1>
                    </div>
                    <hr>
                    <div>
                      <ul role="list" class="divide-y divide-gray-100">
                        <li v-for="item in activityItems" :key="item.commit" class="py-4">
                          <div class="flex items-center gap-x-3">
                            <h3 class="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{{ item.user.name }}</h3>
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
        <div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"><span class="block sm:inline">&copy; 2021 Your Company, Inc.</span> <span class="block sm:inline">All rights reserved.</span></div>
      </div>
    </footer>
  </div>
</template>