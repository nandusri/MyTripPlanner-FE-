<template>
  <div class="container">
    <div class="columns">
        <div v-for="trip in TripDetails" :key="trip.name" class="column">
            <div style="margin-bottom:20px" class="card">
                <div class="card-content">
                <label for="name">Tripname:</label>
                <p class="title is-4">{{ trip.trip_name }}</p>
                <label for="name">Source:</label>
                <p class="title is-4">{{ trip.source_city.city_name }}</p>
                <label for="email">Destination:</label>
                <p class="title is-4">{{ trip.destination_city.city_name }}</p>
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
            TripDetails: []
        }
    },
    created() {
        this.getTriprDetails()
    },
    methods: {
        getTriprDetails() {
            this.$http.get('mytrip/trips/')
            .then((res) => {
                this.TripDetails = [...this.TripDetails, ...res.data]
                console.log(this.TripDetails)
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