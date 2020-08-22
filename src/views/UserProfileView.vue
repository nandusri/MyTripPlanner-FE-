<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 is-2by1">
                <img v-if="!user.profile_picture" src="images/travel_mode.svg" alt="pair-programming" />
                <img v-if="user.profile_picture" :src="user.profile_picture" alt="pair-programming" />
              </figure>
            </div>
            <div class="card-content">
              <label for="name">Username:</label>
              <p class="title is-4">{{ user.username }}</p>
              <label for="name">Name:</label>
              <p class="title is-4">{{ user.first_name }}</p>
              <label for="email">Email:</label>
              <p class="title is-4">{{ user.email }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: null 
        }
    },
    created() {
        this.getUserDetails()
    },
    methods: {
        getUserDetails() {
          var user = JSON.parse(localStorage.getItem('user'))
            this.$http.get(`users/${user.id}`)
            .then((res) => {
                this.user = res.data
                })
            .catch(err => {
                this.error = err.response.data.error
            })
        },
    }
}
</script>

<style>

</style>