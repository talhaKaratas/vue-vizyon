<template>
  <div class="contain">
    <app-loader v-if="loading"></app-loader>
    <app-background-image :imageName="movieDetails.backdrop_path"></app-background-image>
    <div class="container pt-5">
      <div class="row">
        <div class="col-sm-4">
          <app-poster :posterName="movieDetails.poster_path"></app-poster>
        </div>
        <div class="col-sm-8 details">
            <h2>{{ movieDetails.title }}</h2>
            <p>{{ movieDetails.overview }}</p>
            <div>Average Rating: {{ movieDetails.vote_average.toFixed(1) }}</div>
            <a :href="ticketPath" class="btn btn-success button">Get Tickets</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundImage from "./BackgroundImage";
import Poster from "./Poster";
import Loader from "./Loader";
export default {
  components: {
    appBackgroundImage: BackgroundImage,
    appLoader: Loader,
    appPoster: Poster
  },
  data() {
    return {
      movieDetails: {},
      loading: true
    };
  },
  computed: {
      movieId() {
          return this.$route.params.id;
      },
      ticketPath() {
          return `${this.movieId}/ticket`
      }
  },
  created() {
    
    this.$http
      .get(`https://vizyon-866f4.firebaseio.com/moviedetails/${this.movieId}.json`)
      .then(res => {
        this.movieDetails = res.body;
      });
    this.loading = false;
  }
};
</script>
<style>
    .details{
        color: #FFF;
    }
    .button{
        position: absolute;
        top: 0;
        right: 0;
    }

</style>