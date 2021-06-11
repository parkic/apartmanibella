<template>
  <div>
    <!-- First slider -->
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
        :title="slide.text"
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

    <!-- Apartments -->
    <h2 class="subtitle">{{ $t("apartments.title").toUpperCase() }}</h2>

    <v-carousel
      :show-arrows="false"
      v-model="apartmentModel"
      hide-delimiters
      cycle
      height="60vh"
    >
      <v-carousel-item v-for="i in 5" :key="i">
        <v-card class="mx-auto" max-width="374">
          <v-img height="250" :src="mainSlides[i - 1].image"></v-img>

          <v-card-title>
            {{ $t(`apartments.apartments[${i - 1}].name`) }}
          </v-card-title>

          <v-card-text class="pb-0">
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="15"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              {{ $t("apartments.price") }}:
              <b>{{ $t(`apartments.apartments[${i - 1}].price`) }}</b>e/{{ $t("apartments.day") }}
            </div>

            <p v-line-clamp="3">
              Truncate my lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, neque minima libero voluptatibus voluptate enim earum qui tempora sed sequi fugiat aut commodi laboriosam iste cupiditate quo veritatis quam obcaecati.
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel>

    <!-- About -->
    <div class="px-4">
      <h2 class="subtitle">{{ $t("about.title").toUpperCase() }}</h2>
      <p class="text-justify">
        <i>{{ $t("about.text") }}</i>
      </p>
    </div>

    <!-- Contact -->
    <h2 class="subtitle">{{ $t("contact.title").toUpperCase() }}</h2>

    <v-row class="mb-5">
      <v-col cols="12" class="text-center">
        <v-icon>mdi-phone</v-icon>
        <span> +381 (64) 123-79-56 </span>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-icon>mdi-email</v-icon>
        <span> vladimir96ks@gmail.com </span>
      </v-col>
    </v-row>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.2372453860135!2d21.327620515721293!3d43.58077446512876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687ef024bf195%3A0xbe2b86db3981c2ea!2sVidovdanska%2095%2C%20Kru%C5%A1evac%2037000!5e0!3m2!1sen!2srs!4v1623416704774!5m2!1sen!2srs"
        width="100%"
        height="100%"
        style="border: 2px"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <!-- <h2>{{ $t("message.hello") }}</h2> -->
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    apartmentModel: 0,
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

<style scoped>
.slides {
  z-index: 0;
}

.slider-slide {
  font-family: "Oswald", sans-serif;
  font-size: 2.5em;
  color: aliceblue;

  /* margin-bottom: 250px; */
  /* text-align: right; */
}

.subtitle {
  font-size: 2.5em;
  text-align: center;
  margin: 1.5em 0;
  color: rgba(0, 0, 0, 0.7);
}

.map {
  padding: 0 10px 70px;
  height: 400px;
}
</style>


