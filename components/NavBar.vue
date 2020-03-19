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
            Posts
          </nuxt-link>
          <a class="navbar-item" @click="openLogin()">
            Login
          </a>
        </div>
      </div>
    </div>
    <div class="modal" :class="{'is-active': showModal}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p style="background:#fff; padding: 20px; border-radius:5px">Bonjour</p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
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
    },
    openLogin() {
      this.showModal = true
      // this.$modal.open({
      //   parent: this,
      //   component: LoginModal,
      //   hasModalCArd: true,
      //   props: {
      //   }
      //})
    }
  }
}
</script>
