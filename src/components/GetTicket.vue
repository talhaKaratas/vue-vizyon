<template>
  <div>
    <app-loader v-if="loading"></app-loader>
    <div class="container pt-5">
      <div class="row">
        <div class="col-sm-4">
          <img :src="posterPath" class="poster" />
        </div>
        <div class="col-sm-8">
          <div class="container p-5">
            <div class="clocks">
              <section>
                <button type="button" class="btn btn-outline-success">11:00</button>
                <button type="button" class="btn btn-outline-success">13:00</button>
                <button type="button" class="btn btn-outline-success">15:00</button>
                <button type="button" class="btn btn-outline-success">17:00</button>
                <button type="button" class="btn btn-outline-success">19:00</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./Loader";
export default {
  components: {
    appLoader: Loader
  },
  data() {
    return {
      poster: "",
    };
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500/${this.poster}`;
    }
  },
  created() {
    var id = this.$route.params.id;
    this.$http
      .get(`https://vizyon-866f4.firebaseio.com/moviedetails/${id}.json`)
      .then(res => {
        console.log(res.body);
        this.poster = res.body.poster_path;
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.btn{
  border-radius: 80px;
}
.clocks {
  margin-left: 100px;
  margin-top: 40px;
}
.poster{
  width: 100%;
}
</style>
