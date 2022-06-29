<template>
  <div id="app">
    <TheHeader @textChanged="onTextChanged"></TheHeader>
    <TheMain  :movieList="movieList" :seriesList="seriesList"></TheMain>
    <TheCard></TheCard>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheCard from "./components/TheCard.vue";
import axios from "axios";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheCard,
  },
  data() {
    return  {
      searchText: "",
      movieList: [],
      seriesList: [],
    }

  },
  methods: {
    onTextChanged(userInput) {
      this.searchText = userInput;

      axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "2df6dd2ba6ad8cab7d65bcdb0654d59d",
            query: userInput,
            },
        })
        .then((resp) => {
            this.movieList = resp.data.results
        })

        axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
              api_key: "2df6dd2ba6ad8cab7d65bcdb0654d59d",
              query: userInput,
              },
          })
          .then((resp) => {
              this.seriesList = resp.data.results
          })
    }
  },
  
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
