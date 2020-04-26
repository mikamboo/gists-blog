<template>
  <section class="container">
    <div class="articles" is-mobile>
      <nuxt-link v-for="(post, index) in posts" :key="index" :to="{path: `/posts/${post.route}` }">
        <div class="card">
          <div v-if="post.cover" class="card-image">
            <figure class="image is-4by3">
              <img :src="post.cover" alt="Cover image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5 line-clamp">{{ post.title }}</p>
                <p class="subtitle is-7 post-date">Published on {{ new Date(post.date).toLocaleDateString('fr-FR') }}</p>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>

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
      //console.log(meta.body.trim().substring(0, 10))
      let attributes = meta.attributes
      attributes = {
        title: attributes.title === undefined ? 'UNTITLED POST' : attributes.title,
        date: attributes.date === undefined ? new Date('1970-01-01') : attributes.date,
        cover: attributes.cover === undefined ? 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80' : attributes.cover
      }
      return Object.assign({route: post.name}, attributes)
    })
    return {
      posts: await Promise.all(data)
    }
  }
}
</script>

<style>
.articles{
  margin-top: 5em;
  border-radius: 5px;
}
.line-clamp {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.title.is-5 {
  font-size: 1.25rem;
  font-weight: 550;
  color: hsl(162, 100%, 23%);
}
.card{
  margin: 10px;
  width: 280px;
  float: left;
}
.card-content {
  height: 110px;
  position: relative;
  padding: 1rem;
}
.post-date{
  position: absolute;
  bottom: 15px;
}
</style>
