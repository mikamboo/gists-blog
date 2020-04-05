<template>
  <nav class="navbar has-shadow is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          Home
        </nuxt-link>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item is-active" :class="{'is-active': isActive('posts')}" to="/posts">
            Articles
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {

  data() {
    return {
      showModal: false
    }
  },
  methods: {
    isActive(route) {
      return this.$route.name === route
    }
  }
}
</script>
