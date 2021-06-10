import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";
// import CountryFlag from "vue-country-flag";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = {
  en: {
    menuOptions: ["Home", "Apartments", "About", "Contact"],
    message: {
      hello: "Hello world!",
    },
  },
  srLat: {
    menuOptions: ["Početna", "Apartmani", "O nama", "Kontakt"],
    message: {
      hello: "Zdravo svete!",
    },
  },
  srCir: {
    menuOptions: ["Почетна", "Апартмани", "О нама", "Контакт"],
    message: {
      hello: "Здравo свете!",
    },
  },
};

const i18n = new VueI18n({
  locale: "srLat",
  messages,
});

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
