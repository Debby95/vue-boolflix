<template>
    <div class="bg-movie text-white pt-5 container-movie">
        <div class="movieList ">
            <div class="movie-series-section-title">MOVIES</div>
            <div class="row ">
                <div class="col col-sm-6 col-lg-3" v-for="movie in movieList" :key="movie.id">
                    <!-- section movie list with v-for  -->
                    <ul>
                        <li class="mt-5">
                            <TheCard :showMovieAndSeries="movie"></TheCard>
                            <span class="fw-bold">Title Movie:
                                {{movie.title}}
                            </span>
                            <span class="fw-bold">Original title movie
                                {{movie.original_title}}
                            </span>
                            <span class="fw-bold">Original language movie:
                                {{movie.original_language}} 
                            </span>
                            <span class="fw-bold">Vote average movie
                                {{movie.vote_average}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="seriesList">
            <div class="movie-series-section-title">TV SERIES</div>
            <div class="row  ">
                <div class="col col-sm-6 col-lg-3" v-for="series in seriesList" :key="series.id">
                    <!-- section series list with v-for  -->
                    <ul>
                        <li class="mt-5">
                        <TheCard :showMovieAndSeries="series"></TheCard>
                            <span class="fw-bold">Name series:
                                {{series.name}}
                            </span>
                            <span class="fw-bold">Original name series:
                                {{series.original_name}}
                            </span>
                            <span class="fw-bold">Original language series:
                                {{series.original_language}}
                            </span>
                            <span class="fw-bold">Vote average series:
                                {{series.vote_average}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
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
    }

    li {
        padding-bottom: 20px;
        
    }

    .movie-series-section-title {
        color: red;
        font-size: 30px;
        text-align: start;
        margin: 20px;
    }

    .bg-movie {
        background-color: #141414;
        width: 100%;
    }

    span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

</style>