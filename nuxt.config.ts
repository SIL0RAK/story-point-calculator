export default defineNuxtConfig({
    typescript: {
      strict: true
    },
  
    modules: [
      '@nuxtjs/tailwindcss',
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
    },

    app: {
      baseURL: '/story-point-calculator/',
      head: {
        viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
        charset: 'utf-8',     
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { name: 'description', content: 'Best practice to calculate story points' },
          { name: 'keywords', content: 'scrum, agile, story points,'},
        ]
      }
    }
  })