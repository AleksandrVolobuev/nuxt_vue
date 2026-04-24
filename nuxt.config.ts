import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: [fileURLToPath(new URL('./style.css', import.meta.url))],
})
