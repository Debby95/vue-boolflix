<template>
    <div class="thecard">
        {{movieTitle}}
        <span class="fi" :class="'fi-' + countryFlag"></span>

        
    </div>
</template>

<script>
export default {
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
    },
}
</script>

<style>
</style>