import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const apiKey = 'de5dd0854709c32ef2fb0d97d8713a82'

export default new Vuex.Store({
  state: {
    popularMovies: [],
    trends: [],
    movieDetail: [],
    movieCast: []
  },
  mutations: {
    setPopularMovies (state, payload) {
      state.popularMovies = payload
    },
    setTrends (state, payload) {
      state.trends = payload
    },
    setMovieDetail (state, payload) {
      state.movieDetail = payload
    },
    setMovieCast (state, payload) {
      state.movieCast = payload
    }
  },
  actions: {
    getPopularMovies ({ commit }) {
      return axios.get(`movie/popular?api_key=${apiKey}`)
        .then(res => {
          if (res.status === 200) {
            commit('setPopularMovies', res.data.results)
          } else {
            console.log(res.statusText)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTrends ({ commit }) {
      return axios.get(`trending/movie/day?api_key=${apiKey}`)
        .then(res => {
          if (res.status === 200) {
            commit('setTrends', res.data.results)
          } else {
            console.log(res.statusText)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMovieDetail ({ commit }, query) {
      return axios.get(`/movie/${query.id}?api_key=${apiKey}`)
        .then(res => {
          if (res.status === 200) {
            commit('setMovieDetail', res.data)
          } else {
            console.log(res.statusText)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMovieCast ({ commit }, query) {
      return axios.get(`/movie/${query.id}/credits?api_key=${apiKey}`)
        .then(res => {
          if (res.status === 200) {
            commit('setMovieCast', res.data.cast)
          } else {
            console.log(res.statusText)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
