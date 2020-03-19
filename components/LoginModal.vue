<!-- eslint-disable -->
<template>
    <div class="modal-card">
        <section class="modal-card-body">
          <h3 class="title has-text-centered has-text-dark">Member Login</h3>
          <div class="box">
            <b-field label="E-Mail">
              <b-input v-model="mail" type="email" placeholder="E-Mail">
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input v-model="password" type="password" placeholder="Password" minlength="6" password-reveal>
              </b-input>
            </b-field>
            <b-field>
              <a class="password-remind-link has-text-dark is-pulled-right" @click="passwordReminder()">I forgot my password</a>
            </b-field>
            <button class="button is-dark is-large is-fullwidth" @click="doLogin()">
              Login
            </button>
          </div>
          <div class="has-text-centered">
            <router-link v-on:click.native="closeModal()" to="/register">Signup!</router-link>
          </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data () {
    return {
      mail: '',
      password: ''
    }
  },
  methods: {
    passwordReminder() {
      this.$parent.close()
      alert('TODO')
      // this.$modal.open({
      //     parent: this,
      //     component: PasswordForgot,
      //     hasModalCArd: true,
      //     props: {
      //     }
      // })
    },
    closeModal() {
      this.$parent.close()
    },
    doLogin() {
      this.$parent.close()
      this.$router.push('/')
    }
  }
}
</script>
