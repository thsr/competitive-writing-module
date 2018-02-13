export default {
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    if (this.$route.name !== 'SearchResults2') {
      //  start the progress bar
      this.$Progress.finish()
    }
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }

      if (to.name !== 'SearchResults') {
        //  start the progress bar
        this.$Progress.start()
      }

      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      if (to.name !== 'SearchResults') {
        //  start the progress bar
        this.$Progress.finish()
      }
    })
  }
}