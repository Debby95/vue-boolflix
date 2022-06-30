<template>
    <div class="thecard">
        {{movieTitle}}
        <span class="fi" :class="'fi-' + countryFlag"></span>


        {{movieImg}}
        <img :src="movieImg" alt="">

        
    </div>
</template>

<script>
export default {
    name: "TheCard",
    props: {
        movie: Object,
    },
    computed: {
        movieTitle() {
        if (this.movie.name) {
            return this.movie.name;
        }

        return this.movie.title;
        
        },
        countryFlag() {

            return this.movie.original_language;
        
        },
        movieImg() {
            const basicURL = "https://image.tmdb.org/t/p/";
            const imgSize = "w342";
            return basicURL+ imgSize + this.movie.poster_path;
        }
    },
}
</script>

<style>
</style>