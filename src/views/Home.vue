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
    <div>
      <h2 class="subtitle mb-10">{{ $t("apartments.title").toUpperCase() }}</h2>
      <!-- Old version -->
      <!-- <v-carousel
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
      </v-carousel> -->

      <div class="text-center mb-10" cols="12">
        <p class="px-4">{{ $t("apartments.description") }}</p>
      </div>

      <vueper-slides
        class="no-shadow"
        fixed-height="400px"
        :arrows="false"
        :bullets="false"
        :visible-slides="1"
        :slide-ratio="1 / 4"
        :dragging-distance="70"
      >
        <vueper-slide v-for="(slide, i) in mainSlides" :key="i">
          <template v-slot:content>
            <div class="vueperslide__content-wrapper" style="flex-direction: row">
              <v-card flat class="mx-auto" max-width="344">
                <v-img :src="mainSlides[i].image" height="344px"></v-img>

                <v-card-title> {{ $t(`apartments.apartments[${i}].name`)}} </v-card-title>
              </v-card>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>

      <!-- <div class="px-7">
        <v-row align="center" justify="center">
          <v-col cols="12" class="d-flex justify-center">
            <div>
              <v-icon size="60">mdi-wifi</v-icon>
              <br>
              Free Internet
            </div>
          </v-col>
        </v-row>
      </div> -->
    </div>

    <!-- About -->
    <div class="wave mt-10">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #08f"
        ></path>
      </svg>
    </div>

    <div class="px-4 mainPageAbout">
      <h2 class="subtitle mt-0 white--text">
        {{ $t("about.title").toUpperCase() }}
      </h2>
      <p class="text-justify mb-0">
        <i>{{ $t("about.text") }}</i>
      </p>
    </div>

    <div class="wave">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: #08f"
        ></path>
      </svg>
    </div>

    <!-- Contact -->
    <div class="px-4">
      <h2 class="subtitle mt-0">{{ $t("contact.title").toUpperCase() }}</h2>
      <v-row class="mb-5">
        <v-col cols="12" class="text-center px-0">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a :href="'tel:+381641237956'" v-bind="attrs" v-on="on">
                <v-icon>mdi-phone</v-icon> +381 (64) 123-79-56
              </a>
            </template>
            <span>Send us mail</span>
          </v-tooltip>
        </v-col>

        <v-col cols="12" class="text-center px-0">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                :href="'mailto:vladimir96ks@gmail.com'"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-email</v-icon> vladimir96ks@gmail.com
              </a>
            </template>
            <span>Send us mail</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>

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
  computed: {
    visibleSlides() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 2;
        case "md":
          return 4;
        default:
          return 4;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000000de !important;
}
h2 {
  z-index: 5;
}
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

.wave {
  height: 100px;
  overflow: hidden;
  position: relative;
}

.mainPageAbout {
  background-color: #08f;
  color: white;
}
</style>
