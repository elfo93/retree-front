

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
      { href: "https://use.fontawesome.com/releases/v5.0.8/css/all.css", rel: "stylesheet"},

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/static/css/bootstrap.css",
    "@/static/css/bootstrap.min.css",
    "@/static/scss/material-kit.scss",
    "@/static/css/demo.css",
    "@/static/css/style.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

    {src:"@/plugins/vue2-google-maps.js"},
    {src:"@/plugins/vue-browser-geolocation.js"},
    {src:"@/plugins/globalDirectives.js"},
    {src:"@/plugins/globalMixins.js"},
    {src:"@/plugins/material-kit.js"}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-vue-material',
    [
    '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDNMwAB0Rn4cdjQ8rLKiDV8UXZJVhg8QRY",
          authDomain: "retree-ceb1c.firebaseapp.com",
          databaseURL: "https://retree-ceb1c.firebaseio.com",
          projectId: "retree-ceb1c",
          storageBucket: "retree-ceb1c.appspot.com",
          messagingSenderId: "921660988874",
          appId: "1:921660988874:web:7075a1728f61eb669cc333",
          measurementId: "G-LVW5JR2VX2"
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],

  styleResources: {
    scss: ['./static/scss/*.scss']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  }

}
