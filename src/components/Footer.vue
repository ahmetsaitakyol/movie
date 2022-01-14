<template>
  <div class="footer">
    <b-container>
      <img alt="Vue logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass">
  .footer
    background: #022541
    text-align: center
    padding: 2rem
    position: fixed
    bottom: 0
    left: 0
    right: 0
    img
      width: 200px
</style>
