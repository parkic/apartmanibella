<template>
  <div>
    <div>
      <vueper-slides
        lazy
        lazy-load-on-drag
        fixed-height="100vh"
        class="slides"
        autoplay
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.text"
          class="px-15"
        >
          <template v-slot:content>
            <div
              class="vueperslide__content-wrapper"
              style="flex-direction: row"
            >
              <h1 class="slider-slide">{{ slide.text }}</h1>
            </div>
          </template>

          <template v-slot:loader>
            <i class="icon icon-loader spinning"></i>
            <span>Loading...</span>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>

    <h1>{{ $t("message.hello") }}</h1>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        image: require("@/assets/images/300700628.jpg"),
        text: "We define style in elegant details.",
      },
      {
        image: require("@/assets/images/300700769.jpg"),
        text: "Luxury is easy to find, but hard to make.",
      },
      {
        image: require("@/assets/images/300703408.jpg"),
        text: "We speak your language!",
      },
      {
        image: require("@/assets/images/300703502.jpg"),
        text: "We define style in elegant details.",
      },
      {
        image: require("@/assets/images/300703552.jpg"),
        text: "Luxury is easy to find, but hard to make.",
      },
    ]
  }),
}
</script>

<style scoped>
.slides {
  z-index: 0;
}

.slider-slide {
  font-family: "Oswald", sans-serif;
  font-size: 2.5em;
  color: aliceblue;
}
</style>
