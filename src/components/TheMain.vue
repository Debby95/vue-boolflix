<template>
    <div>
        <div class="movieList">
            <!-- section movie list with v-for  -->
            <ul>
                <li v-for="movie in movieList" :key="movie.id">
                    <TheCard :movie="movie"></TheCard>
                    {{movie.title}}
                    {{movie.original_title}}
                    {{movie.original_language}}
                    {{movie.vote_average}}
                </li>
            </ul>
            
        </div>

        <div class="seriesList">
            <!-- section series list with v-for  -->
            <ul>
                <li v-for="series in seriesList" :key="series.id">
                    <TheCard :series="series"></TheCard>
                    {{series.name}}
                    {{series.original_name}}
                    {{series.original_language}}
                    {{series.vote_average}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

//import TheCard from "./components/TheCard.vue";

export default {
    name: "TheMain",
    props: {
        movieList: Array,
        seriesList: Array,
    },

}
    
</script>

<style>
    ul {
        list-style-type: none;
    }
</style>