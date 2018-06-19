<template lang="pug">
  section
    parallax(justify-content="center" :src="headerImage" :modifier="1.2" :show-downward-icon="true")
      card.elevation-large(slot="fixed" color="primary" :ghost="true")
        h1(slot="title") About Me
    banner(color="accent" :small="true")
    article.text-container
      h2.text-emphasize Intro
      p Hi, I'm Dat Nguyen. I've been programming since I was in grade 9. As of this date: (June 18, 2018) I am 21 years old.
      p I am currently in college for software development.
      p I have numerous side projects, all based around various technologies like Unreal Engine 4, Angular, Vue.js, Game Maker and Ionic 2. Its a fun hobby and I can show off to people.
    article.text-container
      h2.text-emphasize Projects
      h4.text-emphasize Red's Adventure
      p.
        I used Game Maker for a high school computer programming culminating assignment. 
        I created <a href="https://github.com/itsdatnguyen/reds-adventure">Red's Adventure</a> which is a action/reflex based platforming game. 
        I gave it a test drive on the classroom peers and they all thought it was impossible to beat. 
        It seemed they really liked it. I got 95% for that assignment, and a cool github project to show off.
      h4.text-emphasize Stealth Game
      p.
        After Game Maker, I decided that Unreal Engine 4 would be a great place to test out 3-D game development. 
        For me, Unreal Engine 4 was a bit more better than Unity.
        So I messed around with Unreal Engine 4 for over the course of 2 years, and created <a href="https://github.com/itsdatnguyen/stealth-game">Stealth Game</a> (I know, super generic name...) as a stealth gameplay demo.
        A lot of its gameplay is borrowed from Splinter Cell: Conviction, which I based this game off of. 
      h4.text-emphasize Utility 
      p.
        After taking several web development classes from college, I decided to invest in learning web development and create some websites. 
        I refined my knowledge of Bootstrap and JQuery, and eventually decided to teach myself Angular 2. 
        As a result, I was able to create <a href="https://itsdatnguyen.github.io/utility/">Utility</a>, which is an Angular 2 SPA that focuses on providing everyday utilities.
      h4.text-emphasize CSS Playground
      p.
        While in the middle of my coop at PHRI (Population Health Research Institute), I began working on my <a href="http://css-playground.com">CSS Playground</a> website.
        Basically, CSS Playground is a website that makes it fun to learn CSS with playful sliders and select boxes. 
        I've shown this project to a large amount of people, and I am consistently surprised by the amazing feedback I get.
        CSS Playground is developed using the Vue javascript framework.


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
export default class AboutPage extends Vue {
  headerImage = require('~/assets/img/dat.jpg')

  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: "About"
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "About"
        },
        {
          hid: "description",
          name: "description",
          content: "About website developer and game developer Dat Nguyen."
        },
        { // open graph
          hid: 'og:description',
          property: "og:description",
          content: "About website developer and game developer Dat Nguyen."
        },
        { 
          hid: 'twitter:card', // twitter card
          name: 'twitter:card',
          content: 'About website developer and game developer Dat Nguyen.'
        },        
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'About website developer and game developer Dat Nguyen.'
        },
      ]
    }
  }
}
</script>