import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
      strict: true
    },
  
    buildModules: [
      '@nuxtjs/stylelint-module',
    ],
  
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/svg',
      '@kevinmarrec/nuxt-pwa'
    ],

    pwa: {
      manifest: {
        name: 'Story point calculator',
        short_name: "SP calc",
        lang: 'en',
      },
      workbox: {
        enabled: true
      }
    }
  })