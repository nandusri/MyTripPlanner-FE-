<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <img src="images/travel_mode.svg" alt="pair-programming" />
      </div>
      <div class="column">
        <h1 class="title is-2 has-text-white has-text-centered">Login</h1>
        <form class="auth-form" @submit.prevent="login">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="username"
            name="username"
            class="input"
            placeholder="johnSmith"
          />

          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            class="input"
            placeholder="Password"
          />

          <button type="submit" name="button" class="button btn-primary">Login</button>

          <p class="has-text-danger">{{ error }}</p>

          <router-link to="/register">Don't have an account? Register.</router-link>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    login() {
        this.$http.post('users/login/', {
	                "username": this.username,
	                "password": this.password
                })
        .then((response) => {
          console.log('response',response);
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.error = err.response.data.error
        })
    }
  }
}
</script>

<style scoped>
</style>