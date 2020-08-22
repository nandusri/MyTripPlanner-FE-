<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-2 has-text-white has-text-centered">New Trip</h1>
        <form class="auth-form" @submit.prevent="addTrip">
          <label for="name">Tripname</label>
          <input
            v-model="trip.trip_name"
            type="text"
            name="trip_name"
            class="input"
            placeholder="captainjohnsmith"
          />
          <label for="name">Current Location</label>
          <multiselect
          v-model="trip.source_city"
          :options="cities"
          :show-labels="false"
          track-by="id"
          label="city_name"
          placeholder="Select a City"
        ></multiselect>

          <label for="email">Destination</label>
          <multiselect
          v-model="trip.destination_city"
          :options="cities"
          :show-labels="false"
          track-by="id"
          label="city_name"
          placeholder="Select a City"
        ></multiselect>

          <button type="submit" name="button" class="button btn-primary">Add Trip</button>

          <p class="has-text-danger">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data() {
    return {
        trip:{
        trip_name: "",
        source_city: "",
        destination_city:"" 
        },
        error: null,
        cities: []
    }
  },
  created() {
        this.getCities()
    },
  computed: {
    currentUserId: function () {
      var user = JSON.parse(localStorage.getItem('user'))
      return user.id
    }
    },
  methods: {
    addTrip() {
        this.$http.post('mytrip/trips/',{
            user: this.currentUserId,
            trip_name: this.trip.trip_name,
            source_city_id: this.trip.source_city.id,
            destination_city_id: this.trip.destination_city.id
        })
        .then((response) => {
          console.log('response',response);
          this.$router.push({ name: 'Trips' })
        })
        .catch(err => {
          this.error = err.response.data.error
        })
    },
    getCities() {
        this.$http.get('mytrip/cities/')
        .then((res) => {
            this.cities = res.data
            })
        .catch(err => {
            this.error = err.response.data.error
        })
    },
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
</style>
