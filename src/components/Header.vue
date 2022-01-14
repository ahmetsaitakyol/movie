<template>
  <div>
    <b-container class="header">
      <router-link to="/">
        <img alt="Vue logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">
      </router-link>
      <div id="nav">
        <router-link to="/">Ana Sayfa</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass">
  .header
    display: flex
    align-items: center
    justify-content: space-between
    padding: 2rem
    img
      width: 200px
</style>
