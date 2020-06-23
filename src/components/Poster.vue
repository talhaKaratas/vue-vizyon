<template>
    <div>
        <img :src="posterPath" alt="" class="poster">
    </div>
</template>

<script>
export default {
    props: ['posterName'],
    computed: {
        posterPath() {
            return `https://image.tmdb.org/t/p/w500${this.posterName}`;
        }
    }
}
</script>

<style>
    .poster{
        width: 100%;
    }
</style>