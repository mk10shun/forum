<template>
  <v-form @submit.prevent="login">
    <v-container>
      <v-text-field
        v-model="form.email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        label="Pasword"
        type="password"
        required
      ></v-text-field>
      <v-btn
        color="green"
        type="submit"
      >Login</v-btn>

      <router-link to="/signup">
        <v-btn flat>Sign Up</v-btn>
      </router-link>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data(){
    return {
      valid: false,
      form: {
        email: null,
        password: null
      }
    }
  },
  created() {
   if(User.loggedIn()){
     this.$router.push({name: 'forum'})
   }
  },
  methods: {
    login() {
      User.login(this.form)
    }
  }
}
</script>

<style>
</style>
