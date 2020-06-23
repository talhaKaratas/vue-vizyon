<template>
    <div>
       <img class="backdrop-image" :src="backdropPath" alt="">
    </div>
</template>

<script>
export default {
    props: ['imageName'],
    computed: {
        backdropPath() {
            return `https://image.tmdb.org/t/p/w1280${this.imageName}`;
        }
    },
};
</script>

<style scoped>
    .backdrop-image{
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(20px);
        transform: scale(1.1);
    }
</style>