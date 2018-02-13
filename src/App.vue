<template>
<div>
  <main-header></main-header>
  <router-view></router-view>
  <vue-progress-bar></vue-progress-bar>
</div>
</template>



<script>
import MainHeader from '@/components/MainHeader.vue'
import vueprogressbar from '@/js/vueprogressbar'

export default {
  name: 'app',
  components: {
    MainHeader
  },

  
  ...vueprogressbar
  /*----------  end vue-progress-bar stuff  ----------*/
}
</script>




<style lang="sass">
// /*=============================*/
// =           fonts           =
// /*=============================*/

@import url('./assets/maisonneue/stylesheet.css')

// ==============================================
// =            mixins and variables           =
// =============================================

$font-family-sans-serif: "Maison Neue", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
$family-monospace: "Maison Mono", monospace
$render-mode: optimizeLegibility

$body-background-color: #fff
$line-height-base: 1.4
$font-size-base: .92rem
// $body-size-mobile: 12px
$line-height: 1.7
$line-height-lg: 1.7
$line-height-sm: 1.7

// $input-btn-focus-width: 0
// $input-focus-border-color: #ced4da

$border-radius: .15rem

=vendor-prefix($name, $value)
  @each $vendor in ('-webkit-', '-moz-', '-ms-', '-o-', '') 
    #{$vendor}#{$name}: #{$value}
// usage: @include vendor-prefix('box-sizing', 'border-box')

=from($device)
  @media screen and (min-width: $device)
    @content

=until($device)
  @media screen and (max-width: $device - 1px)
    @content

=keyframes($name)
  @-webkit-keyframes #{$name}
    @content
  @-moz-keyframes #{$name}
    @content
  @-ms-keyframes #{$name}
    @content
  @keyframes #{$name}
    @content

// ==============================
// =            reset            =
// ==============================

@import './../node_modules/bootstrap/scss/bootstrap'

@import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

// ==============================
// =            general            =
// ==============================




</style>