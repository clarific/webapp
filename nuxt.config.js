const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? 'clarific.com.br' : 'localhost:3000';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Design e desenvolvimento de produtos digitais',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Clarific' },
      {
        hid: 'og-desc',
        property: 'og:description',
        content: 'Design e desenvolvimento de produtos digitais'
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://clarific.com.br/clarific.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#8E54E9' },
  /*
   ** Global CSS
   */
  css: [
    // TODO: Alterar custom.scss para tratar home e lps
    '@/assets/scss/custom.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vuelidate.js',
    { src: '~/plugins/validate', mode: 'client' },
    '~/plugins/awesome-mask.js',
    '~/plugins/mask.js'
  ],
  /*
   ** Server Middlewares
   */
  serverMiddleware: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/gtm'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { container: 'html' }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    https: true,
    baseUrl,
    browserBaseURL: '/',
    progress: false
  },
  /*
   ** Google Tag Manager config
   */
  gtm: {
    id: 'GTM-5SKDTQ5',
    pageTracking: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
