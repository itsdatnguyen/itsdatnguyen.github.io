<template lang="pug">
  .parallax
    .parallax__content
      .parallax__image(ref="img" :style="imgStyles")
    .parallax__fixed-content(:class="justifyDirection")
      slot(name="fixed")
    img.parallax--downward-icon(v-if="showDownwardIcon" :class="ready ? 'parallax--downward-icon-ready' : ''" :src="downwardIconSrc")
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { EventBus, ON_RESIZE_EVENT } from "~/lib"

@Component({})
export default class Parallax extends Vue {

  @Prop({ type: String, default: 'center' })
  justifyContent: string

  @Prop({ type: String })
  src: string

  @Prop({ type: Number, default: 1 })
  modifier: number

  @Prop({ type: Boolean, default: false })
  showDownwardIcon: boolean

  parallax = 0

  ready = false

  downwardIconSrc = require('~/assets/img/icon/arrow_downward-24px.svg')

  get imgStyles() {
    return {
      'background-position': `50% ${this.parallax}px`,
      'background-image': `url(${this.src})`
    }
  }

  beforeMount() {
    EventBus.$on(ON_RESIZE_EVENT, this.resize)
  }

  mounted() {
    this.ready = true
    this.resize()
  }

  beforeDestroy() {
    EventBus.$off(ON_RESIZE_EVENT, this.resize)
  }

  resize() {
    const offset = this.$el.getBoundingClientRect()
    const scrollOffset = offset.top

    this.parallax = Math.round(scrollOffset / -this.modifier)
  }

  get justifyDirection(): string {
    switch (this.justifyContent) {
      case 'center':
        return 'justify-center'

      case 'start':
        return 'justify-start'

      case 'end':
        return 'justify-end'

      default:
        return ''
    }
  }
}
</script>