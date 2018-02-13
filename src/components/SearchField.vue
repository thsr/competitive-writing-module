<!--==============================
=            template            =
===============================-->

<template>


<div id="searchfield" class="mb-5">
<form  @submit.prevent="submitForm" action>
  <i class="fa fa-hashtag text-lg" aria-hidden="true"></i>
  <b-form-input id="searchfieldInput" 
                v-model="searchTerm"
                name="searchTerm"
                type="text" 
                size="lg" 
                :state="hasSpecialCharactersState" 
                aria-describedby="searchfieldInputFeedback" 
                :placeholder="searchedHashtag"></b-form-input>
  <b-form-invalid-feedback id="searchfieldInputFeedback">
      Hashtags can't have special characters :(
  </b-form-invalid-feedback>
</form>
</div>

</template>


<!--============================
=            script            =
=============================-->
<script>
import { debounce } from 'lodash'
import { mixin as focusMixin }  from 'vue-focus'

export default {
  name: 'search-field',
  props: {
    searchedHashtag: {
      default: 'TypeYourHashtag'
    },
    initFocused: {
      default: false
    }
  },
  mixins: [ focusMixin ],
  data: function () {
    return {
      searchTerm: '',
      focused: true
    }
  },
  computed: {
    hasSpecialCharacters () {
      return /[^a-zA-Z0-9_ÂÃÄÀÁÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/.test(this.searchTerm)
    },
    hasSpecialCharactersState () {
      return !/[^a-zA-Z0-9_ÂÃÄÀÁÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/.test(this.searchTerm) || this.name == '' ? null : false
    }
  },
  methods: {
    submitForm: debounce(function () {
      this.$validator.validateAll().then( (result) => {
        if (result) {
          this.$router.push('/search/' + this.searchTerm)
          this.focused = false
          return
        }
      })
      },
      1000,
      {'leading': true,'trailing': false}
    )
  }

}
</script>


<!--===========================
=            style            =
============================-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


</style>
