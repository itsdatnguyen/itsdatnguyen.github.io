<template lang="pug">
  .banner(:class="bannerClasses")
    div.banner__banner-title
      slot(name="title")
    div.banner__banner-text
      slot(name="text")
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { ThemeColor } from "~/lib"

@Component({})
export default class Banner extends Vue {

  @Prop({ type: String, default: 'primary' })
  color: ThemeColor

  @Prop({ type: Boolean, default: false })
  small: boolean

  get bannerClasses() {
    return {
      [this.bannerColor]: true,
      'banner--small': this.small
    }
  }

  get bannerColor(): string {
    switch (this.color) {
      case 'primary':
        return 'banner--primary'

      case 'accent':
        return 'banner--accent'

      default:
        return ''
    }
  }
}
</script>