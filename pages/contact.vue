<template lang="pug">
  section
    parallax(justify-content="center" :src="headerImage" :modifier="1.2" :show-downward-icon="true")
      card.elevation-large(slot="fixed" color="primary" :ghost="true")
        h1(slot="title") Contact
    banner(color="accent" :small="true" :displayArrow="true" :hasSpacing="true")
    article.text-container
      banner(color="accent" :small="true")
        h2.text-emphasize-primary(slot="title") Email
      p Need a custom website done? Have any questions about my work? Send me an email at <a href="mailto:demesnewebsite@gmail.com">demesnewebsite@gmail.com</a>
      banner(color="accent" :small="true")
        h2.text-emphasize-primary(slot="title") Github
      p Check out my projects at my Github: <a href="https://github.com/itsdatnguyen">itsdatnguyen</a>
      banner(color="accent" :small="true")
        h2.text-emphasize-primary(slot="title") LinkedIn
      p Also my <a href="https://www.linkedin.com/in/datquangnguyen/">LinkedIn</a>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

import Parallax from '~/components/Parallax.vue'
import Card from '~/components/Card.vue'
import Banner from '~/components/Banner.vue'

@Component({
  components: {
    Parallax,
    Card,
    Banner
  }
})
export default class ContactPage extends Vue {
  headerImage = require('~/assets/img/stealth-game/central-area-min.jpg')

  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Contact"
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Contact"
        },
        {
          hid: "description",
          name: "description",
          content: "Contact website developer and game developer Dat Nguyen."
        },
        { // open graph
          hid: 'og:description',
          property: "og:description",
          content: "Contact website developer and game developer Dat Nguyen."
        },
        { 
          hid: 'twitter:card', // twitter card
          name: 'twitter:card',
          content: 'Contact website developer and game developer Dat Nguyen.'
        },        
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contact website developer and game developer Dat Nguyen.'
        },
      ]
    }
  }
}
</script>