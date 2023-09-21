// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  ui: {
    global: true,
    // icons: ['mdi', 'simple-icons']
  },
  colorMode: {
    preference: 'light'
  },
  i18n: {
    vueI18n: './nuxt-i18n.js' // custom path example
  }
})
