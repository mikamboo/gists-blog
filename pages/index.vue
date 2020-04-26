<template>
  <section class="container">
    <div class="content0">
      <logo />
      <h1 class="title0">
        GISTS-BLOG
      </h1>
      <h2 class="subtitle0">
        A simple Gists markdown blog with Nuxt
      </h2>
      <div class="deploy-button">
        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/mikamboo/gists-blog">
          <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
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
  font-size: 3.5em;
  color: hsl(162, 100%, 23%);
  letter-spacing: 1px;
  margin: 30px;
  text-transform: capitalize;
}

.subtitle0 {
  font-weight: 300;
  font-size: 1.5em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
