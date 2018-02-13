<template>
<div class="container">
  <div class="sign-up text-center col-md-4 offset-md-4">
  <!--   <p>Let's create a new account !</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button class="btn btn-primary" v-on:click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span> -->
  
  
    <form class="form-signin" @submit.prevent="signUp">
      <h1 class="h3 mb-3 font-weight-normal">No Account - Sign Up</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="email" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="password" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      <p class="mt-5 mb-3 text-muted">or go back to <router-link to="/login">login</router-link></p>
    </form>
  
  
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert(err.message)
        }
      );
    }
  }
}
</script>

<style scoped>

</style>