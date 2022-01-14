<template>
  <b-card class="movie-card" @click="goDetailPage(id)" :img-src="`https://image.tmdb.org/t/p/original${path}`" img-top>
    <span class="average">{{average}}</span>
    <p class="mt-4 pt-1 fw-bolder mb-1">{{title}}</p>
    <p>{{date}}</p>
  </b-card>
</template>
<script>
export default {
  name: 'MovieCard',
  props: {
    path: {
      type: String
    },
    average: {
      type: Number
    },
    title: {
      type: String
    },
    date: {
      type: String
    },
    id: {
      type: Number
    }
  },
  methods: {
    goDetailPage (movieId) {
      this.$router.push({ name: 'MovieDetail', params: { id: movieId } })
    }
  }
}
</script>
<style lang="sass">
  .movie-card
    width: 200px
    border: none !important
    cursor: pointer
    .card-body
      position: relative
      padding-top: 0 !important
    .card-img-top
      border-radius: 20px
    .average
      background: black
      color: white
      font-weight: 900
      border-radius: 50%
      position: absolute
      border: 3px green solid
      top: -30px
      left: 20px
      width: 50px
      height: 50px
      display: flex
      align-items: center
      justify-content: center
</style>
