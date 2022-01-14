<template>
  <b-card class="cast-card" :img-src="`${image}`" img-top>
    <p class="mt-4 pt-1 fw-bolder mb-1">{{title}}</p>
  </b-card>
</template>
<script>
export default {
  name: 'CastCard',
  computed: {
    image () {
      if (this.path) {
        return 'https://image.tmdb.org/t/p/original' + this.path
      }
      return this.poster
    }
  },
  props: {
    path: {
      type: String
    },
    poster: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>
<style lang="sass">
  .cast-card
    width: 200px
    border: none !important
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
