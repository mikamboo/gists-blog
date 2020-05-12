# Gist blog

> A simple [static rendered](https://jamstack.wtf/) blog site genrator, based on [Nuxt.js](https://nuxtjs.org) that fecth posts data from your [Github gists](https://gist.github.com/).

## 🎉 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mikamboo/gists-blog)

Demo : [Mikamboo's Gists Blog](https://gistblog.netlify.app)

## Otherwise, you can follow these steps!

1. 👯‍♂️ Clone the repository locally and cd into the directory.
2. 📦 Install dependencies.
3. 🏗 Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.
4. 🌌 Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).
5. ⚡️ Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

## How it works ?

1. The site genertor require a `GISTS_USER` environnement variable to fetch user posts from Github Gists.
2. All gists containing a `README.md` __+__ `gistsblog.json` will be considered as blog posts

* __README.md__ File contains article markdown
* __gistsblog.json__ is just a filter to avoid to take all Gists

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ GISTS_USER=your-user-name yarn run dev

# build for production and launch server
$ GISTS_USER=your-user-name yarn run generate
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

## TODO

* [ ] Add article meta description, tags ...
* [ ] Articles fallback cover image
* [ ] Display frontmatter meta only if defined
* [ ] Support for Google analytics
* [ ] Use [@nuxtjs/markdownit](https://github.com/xdesro/nuxt-netlify-cms-starter/blob/master/pages/blog/_blog.vue) ?
* [ ] Add vuex state management [like this example](https://github.com/xdesro/nuxt-netlify-cms-starter/blob/master/store/index.js)
* [ ] Update posts download for create unique json managed by [vuex store : nuxtServerInit](https://github.com/xdesro/nuxt-netlify-cms-starter/blob/master/store/index.js)
