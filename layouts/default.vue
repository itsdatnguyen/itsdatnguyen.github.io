<template lang="pug">
  div
    navbar.navbar--fixed
    nuxt
    app-footer
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import throttle from 'lodash/throttle'

import { EventBus, ON_RESIZE_EVENT } from "~/lib"

import Navbar from '~/components/Navbar.vue'
import AppFooter from '~/components/AppFooter.vue'

@Component({
  components: {
    Navbar,
    AppFooter
  }
})
export default class extends Vue {

  beforeMount() {
    window.addEventListener('scroll', this.emitResizeEvent)
    window.addEventListener('resize', this.emitResizeEvent)   
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.emitResizeEvent)
    window.removeEventListener('resize', this.emitResizeEvent)
  }

  emitResizeEvent = throttle((event: Event) => {
    EventBus.$emit(ON_RESIZE_EVENT, event)
  }, 10)

}
</script>
