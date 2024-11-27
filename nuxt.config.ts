export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  css: [
    '~/assets/css/tailwind.css' // Verifique se esse arquivo existe
  ],

  compatibilityDate: '2024-11-26'
})