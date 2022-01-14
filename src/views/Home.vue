<template>
  <b-container>
    <b-row class="home">
      <jumbotron />
      <b-row>
        <p class="title text-start fw-bolder"> What's Popular </p>
      </b-row>
      <b-row>
        <div class="movies-box" >
          <movie-card :id="movie.id" :path="movie.poster_path" :average="movie.vote_average" :title="movie.title" :date="movie.release_date"  v-for="(movie, key) in popularMovies" :key="key" />
        </div>
      </b-row>
      <b-row>
        <p class="title text-start fw-bolder"> Trends </p>
      </b-row>
      <b-row>
        <div class="movies-box" >
          <movie-card :id="movie.id" :path="movie.poster_path" :average="movie.vote_average" :title="movie.title" :date="movie.release_date"  v-for="(movie, key) in trends" :key="key" />
        </div>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import MovieCard from '../components/MovieCard'
import Jumbotron from '../components/Jumbotron'
import { mapState } from 'vuex'

export default {
  components: { MovieCard, Jumbotron },
  name: 'Home',
  computed: {
    ...mapState(['popularMovies', 'trends'])
  },
  mounted () {
    this.$store.dispatch('getPopularMovies')
    this.$store.dispatch('getTrends')
  }
}
</script>
<style lang="sass">
  .home
    .title
      color: black
      font-size: 2rem
    .movies-box
      display: grid
      grid-gap: 1rem
      grid-auto-flow: column
      grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) )
      overflow-x: auto
</style>
