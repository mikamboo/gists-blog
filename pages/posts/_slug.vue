<template>
  <div :key="$route.params.slug">
    <section class="hero is-medium is-dark" :style="{ backgroundImage: 'url('+ attributes.cover +')' }">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            {{ attributes.title }}
          </h1>
          <h2 v-if="attributes.date" class="subtitle">
            {{ new Date(attributes.date).toLocaleDateString() }}
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content has-text-justified" v-html="content"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero{
  background-size: cover;
}
.hero-body {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 8% 0 8%;
}
.content {
  margin-top: 2em;
}
</style>

<script>
export default {
  async asyncData ({ params }) {
    const res = await import(`~/content/posts/${params.slug}.md`)
    return {
      attributes: res.attributes,
      content: res.html
    }
  },
  head() {
    return {
      title: this.attributes.title
    }
  }
}
</script>
