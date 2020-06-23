<template>
  <div class="card">
    <router-link :to="goMovieDetails">
      <img :src="posterPath" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
      </div>
      <p class="card-text">
        <small class="text-muted">{{ movie.vote_average.toFixed(1) }}</small>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
      goMovieDetails() {
          return `movie/${this.movie.id}`;
      },
      posterPath() {
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      }
  }
};
</script>

<style>
.card {
  min-width: 250px;
}
.card img{
  width: 100%;
} 
</style>