<template>
  <div>
    <ul>
      <li v-for="item in theList" v-bind:key="item.id">{{ item.title }}</li>
    </ul>
    <v-btn @click="doIt">HIT IT B</v-btn>
    <toolbar></toolbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import toolbar from './Toolbar'
import AppFooter from './AppFooter'
import Login from './login/Login'

export default {
  data() {
    return {
      theList: {}
    }
  },
  methods: {
    doIt() {
      axios
        .get('http://localhost:8000/api/question')
        // .then(response => (this.info = response))
        .then(response => this.theList = response.data.data)
      console.log('oh YEA YEA YEA');
    }
  },
  components: { toolbar, AppFooter, Login },

  mounted () {

  },
}
</script>

<style>
</style>
