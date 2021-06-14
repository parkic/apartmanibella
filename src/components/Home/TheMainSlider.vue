<template>
  <vueper-slides
    lazy
    lazy-load-on-drag
    fade
    fixed-height="100vh"
    class="slides"
    autoplay
    :arrows="false"
  >
    <vueper-slide
      v-for="(slide, i) in mainSlides"
      :key="i"
      :image="slide.image"
      class="px-10"
    >
      <template v-slot:content>
        <div class="vueperslide__content-wrapper" style="flex-direction: row">
          <h3 class="slider-slide">
            {{ $t(`home.mainSlider.titles[${i}]`) }}
          </h3>
        </div>
      </template>

      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    mainSlides: [
      {
        image: require("@/assets/images/300700628.jpg"),
      },
      {
        image: require("@/assets/images/300700769.jpg"),
      },
      {
        image: require("@/assets/images/300703408.jpg"),
      },
      {
        image: require("@/assets/images/300703502.jpg"),
      },
      {
        image: require("@/assets/images/300703552.jpg"),
      },
    ],
  }),
};
</script>

<style></style>
