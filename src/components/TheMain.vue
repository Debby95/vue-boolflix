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
                <li v-for="movie in seriesList" :key="movie.id">
                    <span class="fw-bold">Name series:</span>
                        {{movie.name}}
                    <span class="fw-bold">Original name series:</span>
                        {{movie.original_name}}
                    <span class="fw-bold">Original language series:</span>
                        {{movie.original_language}}
                    <span class="fw-bold">Vote average series:</span>
                        {{movie.vote_average}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TheCard from "../components/TheCard.vue";

export default {
    name: "TheMain",
    components: {
        TheCard,
    },
    props: {
        movieList: Array,
        seriesList: Array,
    },

}
    
</script>

<style>
    ul {
        list-style-type: none;
        display: flex;
    }
    li {
        padding-bottom: 20px;
    }

</style>