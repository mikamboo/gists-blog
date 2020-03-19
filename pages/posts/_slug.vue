<template>
  <div :key="$route.params.slug">
    <section class="hero is-medium is-dark is-bold" :style="{ background: 'url('+ attributes.cover +')' }">
      <div class="hero-body">
        <h1 class="title is-size-2">
          {{ attributes.title }}
        </h1>
        <h2 v-if="attributes.date" class="subtitle">
          {{ new Date(attributes.date).toLocaleDateString() }}
        </h2>
      </div>
    </section>
    <div class="container">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content has-text-justified" v-html="content"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-body {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 3% 0 3%;
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
  }
}
</script>
