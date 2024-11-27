export default {
  ssr: true,  // Define se o Nuxt será usado como SSR ou SPA
  router: {
    base: '/',  // Use '/' para o caminho raiz
  },
  css: ['~/assets/css/tailwind.css'],
  buildModules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-26',
};
