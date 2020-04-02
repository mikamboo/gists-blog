import path from 'path'
import pkg from './package'

async function getRoutes(dir) {
  const fs = require('fs')
  const glob = require('glob')
  const http = require('https')
  const Gists = require('gists')

  const gistsInstance = new Gists({})
  const res = await gistsInstance.list('mikamboo')

  const posts = res.body.filter((x) => {
    return 'gistsblog.json' in x.files && 'README.md' in x.files
  })

  posts.forEach((post) => {
    const file = fs.createWriteStream(`./content/posts/${post.id}.md`)
    http.get(post.files['README.md'].raw_url, function(response) {
      // eslint-disable-next-line no-console
      //console.log(post.files['README.md'])
      response.pipe(file)
    })
  })

  const files = glob.sync(dir)
  const data = files.map(function (file) {
    let name = path.basename(file)
    name = name.substr(0, name.lastIndexOf('.'))
    const route = `/posts/${name}`
    return {
      name,
      file,
      route
    }
  })

  const json = JSON.stringify(data)
  fs.writeFileSync('./content/posts.json', json)

  return data
}

/* eslint-disable */
//-- Create json routes fron
getRoutes('./content/posts/*.md')
//console.log(require('./content/posts.json').map(x => x.route))
/* eslint-enable */

export default {
  mode: 'universal',

  generate: {
    routes() {
      return require('./content/posts.json').map(x => x.route)
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          vue: {
            root: 'dynamic-md'
          }
        }
      })
    }
  }
}
