<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      style="background-color: rgba(255, 255, 255, 0.7)"
    >
      <div class="py-7">THIS IS PLACE FOR LOGO</div>

      <v-divider></v-divider>

      <v-list nav dense class="pt-7">
        <!-- v-model="group" -->
        <!-- active-class="deep-purple--text text--accent-4" -->
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="(option, idx) in menuOptions"
            :key="idx"
            :to="option.name == 'home' ? '/' : option.name"
            class="py-2"
          >
            <v-list-item-icon>
              <v-icon v-text="option.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ $t(`menuOptions[${idx}]`) }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
      <!-- fast contact info -->
      <!-- <div>
        <v-row>
          <v-col offset="1" cols="10" class="my-5">
            <a :href="'mailto:vladimir96ks@gmail.com'">
              <v-icon>mdi-email</v-icon>
              <span>example@test.com</span>
            </a>
          </v-col>
        </v-row>
      </div> -->

      <!-- Languages -->
      <v-row justify="center" class="py-8 px-5">
        <v-col cols="4" class="justify-center px-1">
          <span @click="$i18n.locale = 'srCir'">
            <country-flag country="srb" size="normal" class="ml-2" />
            <span>Ћирилица</span>
          </span>
        </v-col>
        <v-col>
          <span @click="$i18n.locale = 'srLat'">
            <country-flag country="srb" size="normal" class="ml-0" />
            <span>Latinica</span>
          </span>
        </v-col>
        <v-col>
          <span @click="$i18n.locale = 'en'">
            <country-flag country="gb" size="normal" />
            <span>English</span>
          </span>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <!-- Heading -->
    <v-app-bar absolute flat color="transparent" height="72">
      <v-toolbar-title>Place for logo</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon 
        size="40"
        @click="drawer = !drawer"
        :color="$route.name == 'About' || $route.name == 'Apartments'? 'deep-purple' : 'white'"
      >
        mdi-menu
      </v-icon>
      <!-- <v-app-bar-nav-icon
        size="40"
        @click="drawer = !drawer"
        :color="$route.name == 'About' ? 'deep-purple' : 'white'"
      ></v-app-bar-nav-icon> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <back-to-top bottom="50px" right="20px" visibleoffset="400">
      <v-btn color="indigo darken-4" fab>
        <v-icon color="white">mdi-arrow-up-bold</v-icon>
      </v-btn>
    </back-to-top>

    <v-footer dark padless class="mt-15">
      <v-col cols="12" class="py-0">
        <v-card flat tile color="transparent" class="white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="text-center" cols="12"> This is place for logo </v-col>

      <v-col class="text-center" cols="12">
        Made with <v-icon small color="error" class="pb-1">mdi-heart</v-icon> by
        <span style="color: #2196f3">crystalnoon</span> ©
        <!-- <br> -->
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import CountryFlag from "vue-country-flag";
import BackToTop from "vue-backtotop";

export default {
  components: {
    CountryFlag,
    BackToTop,
  },
  data: () => ({
    drawer: null,
    menuOptions: [
      { name: "home", icon: "mdi-home" },
      { name: "apartments", icon: "mdi-bed" },
      { name: "about", icon: "mdi-card-account-details" },
      { name: "contact", icon: "mdi-information" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    // group: null,
    image: 23,
  }),
  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
};
</script>
