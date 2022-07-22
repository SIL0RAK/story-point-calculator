<template>
  <div class="dark:bg-gray-800 h-full select-none">
    <div class="md:container md:mx-auto p-5 pt-16 h-ful md:pt-5">
      <slot />
    </div>
    <div
      class="absolute top-5 right-5"
      role="button"
      tabindex="0"
      title="Theme switch"
      @click="handleThemeSwitchClick"
    >
      <img
        v-if="isDarkMode"
        alias="Switch to light theme"
        title="Switch to light theme"
        class="w-8 h-8"
        src="~assets/sun.svg"
      >
      <img
        v-else
        alias="Switch to dark theme"
        title="Switch to dark theme"
        class="w-8 h-8"
        src="~assets/moon.svg"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// theme config
const isDarkMode = ref(false)

const turnOnDarkMode = () => {
  isDarkMode.value = true
  document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
}

const turnOffDarkMode = () => {
  isDarkMode.value = false
  document.documentElement.classList.remove('dark')
  localStorage.setItem('theme', 'light')
}

const handleThemeSwitchClick = () => {
  isDarkMode.value
    ? turnOffDarkMode()
    : turnOnDarkMode()
}

onMounted(() => {
  if (
    localStorage.theme === 'dark' || (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    turnOnDarkMode()
  } else {
    turnOffDarkMode()
  }
})

// head config
useHead({
 title: 'Story point calculator',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Best practice to calculate story points' },
    { name: 'author', content: 'Karolis Krusinskas and Kamile Sukackaite'},
    { name: 'keywords', content: 'scrum, agile, story points,'},
    { name: 'description', content: 'Calculate story points from Uncertainty, Effort and Complexity' }
  ]
})

</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  width: 100%;
}
</style>
