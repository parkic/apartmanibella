<template>
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

    <!-- Apartments slider -->
    <vueper-slides
      class="no-shadow"
      fixed-height="400px"
      :arrows="false"
      :bullets="false"
      :visible-slides="visibleSlides"
      :slide-ratio="1 / 4"
      :dragging-distance="70"
    >
      <vueper-slide v-for="(slide, i) in mainSlides" :key="i">
        <template v-slot:content>
          <div
            class="vueperslide__content-wrapper"
            style="flex-direction: row"
          >
            <v-card flat class="mx-auto" max-width="344">
              <v-img :src="mainSlides[i].image" height="344px"></v-img>

              <v-card-title>
                <v-row>
                  <v-col>{{ $t(`apartments.apartments[${i}].name`) }}</v-col>
                  <v-col class="text-right">
                    <b>{{ $t(`apartments.apartments[${i}].price`) }}e</b>/{{ $t("apartments.day") }}
                  </v-col>
                </v-row>
              </v-card-title>
            </v-card>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>

    <!-- Icons -->
    <div class="px-7 py-10">
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          sm="6"
          lg="3"
          class="d-flex justify-center"
          v-for="(item, idx) in $t('apartments.icons')"
          :key="idx"
          style="overflow: hidden"
        >
          <v-card
            flat
            class="text-center d-flex flex-column align-center justify-center"
            :data-aos="idx%2==0 ? 'fade-up-right' : 'fade-up-left'"
            data-aos-duration="1000"
          >
            <div>
              <v-icon :size="iconSize" color="primary"
                >mdi-{{ item.icon }}</v-icon
              >
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: {VueperSlides, VueperSlide},
  data: () => ({
    iconSize: 60,
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
          return 3;
        case "lg":
          return 4;
        default:
          return 4;
      }
    },
  },
}
</script>

<style>

</style>