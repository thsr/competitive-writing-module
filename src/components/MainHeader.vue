<!--==============================
=            template            =
===============================-->

<template>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link :to="{ path: '/' }" class="navbar-brand" href="javascript:;">Competitive Writing Module</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ path: '/hello' }" class="nav-link" href="javascript:;">Hello</router-link>
      </li>
    </ul>
    <ul class="navbar-nav">  
      <li class="nav-item">
        <router-link :to="{ path: '/login' }" class="nav-link" href="javascript:;">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/sign-up' }" class="nav-link" href="javascript:;">Sign-Up</router-link>
      </li>
    </ul>
  </div>
</nav>




</template>


<!--============================
=            script            =
=============================-->

<script>
export default {
  name: 'main-header',
  data: function () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>


<!--===========================
=            style            =
============================-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


</style>
