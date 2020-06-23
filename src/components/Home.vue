<template>
  <div>
    <app-header></app-header>
    <app-loader v-if="loading"></app-loader>
    <div class="container py-5">
      <div class="card-deck mt-3" v-for="group in groups">
        <app-movie v-for="movie in group" :movie="movie"></app-movie>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Movie from "./Movie";
import Loader from './Loader';
export default {
  components: {
    appHeader: Header,
    appMovie: Movie,
    appLoader: Loader,
  },
  data() {
    return {
      movies: [],
      groups: [],
      loading: true,
    };
  },
  created() {
    this.$http
      .get("https://vizyon-866f4.firebaseio.com/movies.json")
      .then(res => {
        this.movies = res.body;
        // var slice1 = this.movies.slice(0, 3);
        // console.log(slice1);
        // var slice2 = this.movies.slice(3, 6);
        // console.log(slice2);
        // this.groups.push(slice1);
        // this.groups.push(slice2);
        // console.log(this.groups);
        this.movies.forEach((movie, index) => {
            if(index % 3 === 0) {
                this.groups.push([]);
            }
            this.groups[this.groups.length - 1].push(movie);
        })
        this.loading = false;
      });
  }
};
</script>