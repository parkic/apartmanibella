<template>
  <v-app id="inspire" style="height: 500vh">
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

      <!-- Languages -->
      <v-row justify="center" class="py-8 px-5">
        <v-col cols="4" class="justify-center px-1">
          <span @click="$i18n.locale = 'srCir'">
            <country-flag country="srb" size="normal" class="ml-2"/>
            <span>Ћирилица</span>
          </span>
        </v-col>
        <v-col>
          <span @click="$i18n.locale = 'srLat'">
            <country-flag country="srb" size="normal" class="ml-0"/>
            <span>Latinica</span>
          </span>
        </v-col>
        <v-col>
          <span @click="$i18n.locale = 'en'">
            <country-flag country="gb" size="normal"  />
            <span>English</span>
          </span>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <!-- Heading -->
    <v-app-bar absolute flat color="transparent" height="72">
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        x-large
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <!-- <v-img
        height="90vh"
        :src="`https://picsum.photos/500/300?image=${image * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${image * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      ></v-img> -->
      <!-- <div>
        <v-btn @click="image++">Next img</v-btn>
      </div> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components: {
    CountryFlag
  },
  data: () => ({
    drawer: null,
    menuOptions: [
      { name: "home", icon: "mdi-home" },
      { name: "apartments", icon: "mdi-pencil" },
      { name: "about", icon: "mdi-pencil" },
      { name: "contact", icon: "mdi-pencil" },
    ],
    // group: null,
    image: 23
  }),
  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
};
</script>
