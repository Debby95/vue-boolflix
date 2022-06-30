<template>
    <div class="the-card">
        <h4>{{movieTitle}}</h4>
        <span class="fi" :class="'fi-' + countryFlag"></span>
        <!-- {{movieImg}} -->
        <img :src="movieImg" alt="">

        
    </div>
</template>

<script>
export default {
    name: "TheCard",
    props: {
        showMovieAndSeries: Object,
    },
    computed: {
        movieTitle() {
        if (this.showMovieAndSeries.name) {
            return this.showMovieAndSeries.name;
        }

        return this.showMovieAndSeries.title;
        
        },
        
        countryFlag() {

            return this.showMovieAndSeries.original_language;
        
        },
        movieImg() {
            const basicURL = "https://image.tmdb.org/t/p/";
            const imgSize = "w342";
            return basicURL+ imgSize + this.showMovieAndSeries.poster_path;
        }
    },
}
</script>

<style>
    .the-card:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>