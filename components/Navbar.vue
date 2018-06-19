<template lang="pug">
  nav.navbar
    nuxt-link.navbar__brand-logo(to="/" :class="outlineClasses") Dat Nguyen
    .navbar__link-spacer(:class="spacerClasses")
    .navbar__links(:class="outlineClasses")
      nuxt-link.navbar--about-icon(to="/about")
      nuxt-link.navbar--contact-icon(to="/contact")
      a.navbar--resume-icon(download href="./resume.pdf")

    
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { EventBus, ON_RESIZE_EVENT } from "~/lib"

@Component({})
export default class Navbar extends Vue {

  scrollDistance = 0
  screenWidth = 10000

  get isNavBorderOutlineVisible(): boolean {
    if ((process as any).client) {
      return this.scrollDistance > (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) * 0.6
    }
    return false
  }

  get outlineClasses() {
    return {
      'navbar--outline': this.isNavBorderOutlineVisible
    }
  }

  get spacerClasses() {
    return {
      'navbar--outline': (this.screenWidth < 500) && this.isNavBorderOutlineVisible
    }
  }

  beforeMount() {
    EventBus.$on(ON_RESIZE_EVENT, this.resize)
  }

  mounted() {
    this.resize()
  }

  beforeDestroy() {
    EventBus.$off(ON_RESIZE_EVENT, this.resize)
  }

  resize() {
    if (document.scrollingElement) {
      this.scrollDistance = document.scrollingElement.scrollTop
    }
    this.screenWidth = document.body.clientWidth
  }
}
</script>