<template>
  <section class="container">
    <nuxt-link v-for="(post, index) in posts" :key="index" :to="{path: `/posts/${post.route}` }">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="post.cover" alt="Cover image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ post.title }}</p>
              <p class="subtitle is-6">{{ new Date(post.date).toLocaleDateString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>

//1. Async loading + async map
//2. "frontmatter-markdown-loader" make possible import('file.md')

export default {
  async asyncData () {
    // Get post list saved on json file
    const posts = await require('~/content/posts.json')
    // Fetch post metadata from .md files using "frontmatter-markdown-loader"
    const data = posts.map(async (post) => {
      const meta = await import(`~/content/posts/${post.name}.md`)
      return Object.assign({route: post.name}, meta.attributes)
    })

    return {
      posts: await Promise.all(data)
    }
  }
}
</script>

<style>
.card{
  margin: 5px;
  width: 300px;
}
</style>
