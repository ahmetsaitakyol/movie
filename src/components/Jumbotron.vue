<template>
  <div class="jumbotron-section">
    <b-jumbotron>
      <p class="number">2021</p>
      <p class="title">That's a Wrap</p>
      <p class="text">Let's dive into 2021's best and worst! →</p>
    </b-jumbotron>
</div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style lang="sass">
  .jumbotron-section
    height: auto
    max-height: none
    background: url('https://www.themoviedb.org/assets/2/v4/taw/2021/shape_8-fae706ec0da1ef4e0c48b6abfe1984cfb5808be9dfc01619b25b2a9691c43f56.svg') 50% 50% no-repeat
    margin-bottom: 20
    color: white !important
    .jumbotron
      padding: 2rem
      .number
        font-size: 7rem
      .title
        font-size: 5rem
        color: white
      .text
        font-size: 2rem
</style>
