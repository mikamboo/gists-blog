<template>
  <section class="container">
    <div class="content0">
      <logo />
      <h1 class="title0">
        gists-blog
      </h1>
      <h2 class="subtitle0">
        A simple Gists markdown blog with Nuxt
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

const posts = require('~/content/posts.json')

export default {
  components: {
    Logo
  },
  data() {
    return {
      routes: [],
      files: posts
    }
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.routes.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>

<style>
.content0 {
  margin: 18% auto;
  text-align: center;
}

.title0 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5em;
  color: #35495e;
  letter-spacing: 1px;
  margin: 30px;
  text-transform: capitalize;
}

.subtitle0 {
  font-weight: 300;
  font-size: 2em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
