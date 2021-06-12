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
          >
            <v-card
              flat
              class="text-center d-flex flex-column align-center justify-center"
            >
              <!-- {{$t("apartments.icons")}} -->
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

    <!-- About -->
    <!-- <div class="wave mt-10">
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
    </div> -->
    <div style="height: 50px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-17.77,151.47 C-17.21,156.41 527.93,-8.38 526.80,-7.39 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #08f"
        ></path>
      </svg>
    </div>

    <div class="mainPageAbout px-4 py-12">
      <h2 class="subtitle mt-0 white--text">
        {{ $t("about.title").toUpperCase() }}
      </h2>
      <p class="text-justify mb-0">
        <i>{{ $t("about.text") }}</i>
      </p>
    </div>

    <!-- <div class="wave">
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
    </div> -->
    <div style="height: 50px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-24.54,161.34 C-21.16,143.58 517.21,-2.45 516.64,-4.44 L500.84,-4.44 L0.00,0.00 Z"
          style="stroke: none; fill: #08f"
        ></path>
      </svg>
    </div>

    <!-- Contact -->
    <div class="px-4">
      <h2 v-if="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'" class="subtitle mt-15">
        {{ $t("contact.title").toUpperCase() }}
      </h2>

      <v-row>
        <!-- Contact Information -->
        <v-col cols="12" md="6">
          <v-col cols="12" v-if="$vuetify.breakpoint.name != 'xs' && $vuetify.breakpoint.name != 'sm'" class="py-0">
            <h3 class="subtitle text-center mb-7">
              {{ $t("contact.contactInfo") }}
            </h3>
          </v-col>

          <v-row class="mb-5">
            <v-col cols="12" class="d-flex justify-center">
              <v-card
                flat
                class="text-center d-flex flex-column align-center justify-center"
              >
                <div>
                  <v-icon>mdi-map-marker</v-icon>
                  <p class="mb-0 mt-2">Vidovdanska 95,</p>
                  <p class="mb-0">37000 Kruševac,</p>
                  <p>Srbija</p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              <v-card
                flat
                class="text-center d-flex flex-column align-center justify-center"
              >
                <div>
                  <v-icon>mdi-clock</v-icon>
                  <p class="mb-0 mt-2">
                    {{ $t("contact.workTime[0]") }}: 00:00 - 24:00
                  </p>
                  <p>{{ $t("contact.workTime[1]") }}</p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" class="text-center px-0 pb-0">
              <a :href="'tel:+381641237956'">
                <p class="mb-0">
                  {{ $t("contact.reservation") }}:
                  <span class="primary--text">+381 64 123-79-56</span>
                </p>
              </a>
            </v-col>

            <v-col cols="12" class="text-center px-0">
              <a :href="'mailto:vladimir96ks@gmail.com'">
                <p class="mb-0">Email: <span class="primary--text">vladimir96ks@gmail.com</span></p>
              </a>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" offset-sm="1" sm="10" offset-md="0" md="6" lg="5">
          <!-- Write us -->
          <v-row>
            <v-col cols="12">
              <h3 class="subtitle text-center mb-7">{{ $t("contact.writeUs") }}</h3>
            </v-col>
            <v-col cols="12">
              <p class="text-center">{{ $t("contact.writeUsText") }}</p>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field :label="$t('contact.writeUsForm.name')" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field :label="$t('contact.writeUsForm.email')" outlined></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field :label="$t('contact.writeUsForm.title')" outlined></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-textarea outlined auto-grow :label="$t('contact.writeUsForm.message')" rows="6"></v-textarea>
            </v-col>
            <v-col offset="1" cols="10" offset-sm="3" sm="6" class="py-0">
              <v-btn block large color="primary">{{ $t("contact.writeUsForm.send") }}</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <!-- M A P A -->
    <!-- <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.2372453860135!2d21.327620515721293!3d43.58077446512876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687ef024bf195%3A0xbe2b86db3981c2ea!2sVidovdanska%2095%2C%20Kru%C5%A1evac%2037000!5e0!3m2!1sen!2srs!4v1623416704774!5m2!1sen!2srs"
        width="100%"
        height="100%"
        style="border: 2px"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div> -->
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
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

.triangle-bottom-right {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 80px 500px;
  border-color: transparent transparent #6980fe transparent;
}
</style>
