<template>
  <div class="movie-detail container-fluid">
    <div class="movie-detail-card">
     <b-card
        overlay
        :style="{ 'background-image': `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})` }"
        img-alt="Card Image"
      >
      <img :src="`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`" alt="Poster">
      <div class="p-5 d-flex align-items-baseline flex-column h-100">
        <p class="movie-title">{{movieDetail.original_title}}</p>
        <p class="release-date">{{movieDetail.release_date}}</p>
        <p class="right-title">Overviev</p>
        <p class="text-start" v-html="movieDetail.overview"></p>
        <p class="right-title">Tag</p>
        <p class="text-start">{{movieDetail.tagline}}</p>
      </div>
      </b-card>
    </div>
    <div>
      <p class="text-black text-start fw-bolder fs-3 mb-1">Cast</p>
    </div>
    <div class="movie-cast">
      <cast-card :path="cast.profile_path" :title="cast.original_name" :poster="`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`"  v-for="(cast, key) in movieCast" :key="key" />
    </div>
  </div>
</template>
<script>
import CastCard from '../components/CastCard'
import { mapState } from 'vuex'

export default {
  components: { CastCard },
  computed: {
    ...mapState(['movieDetail', 'movieCast'])
  },
  mounted () {
    this.$store.dispatch('getMovieDetail', { ...this.query, id: this.$route.params.id }).then(res => {
      this.$store.dispatch('getMovieCast', { ...this.query, id: this.movieDetail.id })
    })
  }
}
</script>
<style lang="sass">
  .movie-detail-card
    height: 45vh
    .card
      background-size: cover
      background-position: center
      height: 40vh
      position: fixed
      left: 0
      right: 0
      border-radius: 0
      border: none !important

      .card-body
        background-color: rgba(0, 0, 0, 0.9)
        display: flex
        align-items: center
        color: white
        img
          height: 100%
          border-radius: 20px
        .movie-title
          font-size: 2rem
          font-weight: bold
        .right-title
          font-size: 1.5rem
          font-weight: bold
  .movie-cast
    display: grid
    grid-gap: 1rem
    grid-auto-flow: column
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) )
    overflow-x: auto
</style>
