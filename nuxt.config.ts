export default {
  // Defina como 'false' se você preferir uma SPA
  ssr: true,

  css: ['~/assets/css/tailwind.css'],
  buildModules: ['@nuxtjs/tailwindcss'],

  // Adicione aqui seus plugins
  plugins: [],

  router: {
    base: '/',  // Verifique se a base está configurada corretamente
  },

  build: {
    transpile: ['pinia'],  // Caso você use Pinia para o estado global
  },

  compatibilityDate: '2024-11-26',
};