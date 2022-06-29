<template>
    <div>
        <div class="movieList">
            <!-- section movie list with v-for  -->
            <ul>
                <li v-for="movie in movieList" :key="movie.id">
                    <TheCard :movie="movie"></TheCard>
                    <span class="fw-bold">Title Movie:</span>
                        {{movie.title}}
                    <span class="fw-bold">Original title movie</span>
                        {{movie.original_title}}
                    <span class="fw-bold">Original language movie:</span>
                        {{movie.original_language}}
                    <span class="fw-bold">Vote average movie</span>
                        {{movie.vote_average}}
                </li>
            </ul>
            
        </div>

        <div class="seriesList">
            <!-- section series list with v-for  -->
            <ul>
                <li v-for="series in seriesList" :key="series.id">
                    <TheCard :series="series"></TheCard>
                    <span class="fw-bold">Name series:</span>
                        {{series.name}}
                    <span class="fw-bold">Original name series:</span>
                        {{series.original_name}}
                    <span class="fw-bold">Original language series:</span>
                        {{series.original_language}}
                    <span class="fw-bold">Vote average series:</span>
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