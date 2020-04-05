# Gist blog

> A simple [static rendered](https://jamstack.wtf/) blog site genrator, based on [Nuxt.js](https://nuxtjs.org) that fecth posts data from your [Github gists](https://gist.github.com/).

## 🎉 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=hhttps://github.com/mikamboo/gistsblog)

Demo : [My personal Gists Blog]()

Otherwise, you can follow these steps!

1. 👯‍♂️ Clone the repository locally and cd into the directory.
2. 📦 Install dependencies.
3. 🏗 Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.
4. 🌌 Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).
5. ⚡️ Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static blog
$ GISTS_USER=your-user-name yarn run generate
```

## Inspired/Referred

For detailed explanation on how things work, checkout :

- [Nuxt.js docs](https://nuxtjs.org)
- [NPM frontmatter-markdown-loader package](https://www.npmjs.com/package/frontmatter-markdown-loader)
- [Blog post : Nuxt markdown blog](https://pambo-ognana.ga/create-a-simple-markdown-blog-with-nuxtjs)
- [uxt & Netlify CMS Starter](https://github.com/xdesro/nuxt-netlify-cms-starter)
