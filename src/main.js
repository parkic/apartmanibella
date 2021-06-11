import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";
import lineClamp from "vue-line-clamp";
// import CountryFlag from "vue-country-flag";

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(lineClamp, {
  // plugin options
});

const messages = {
  en: {
    menuOptions: ["Home", "Apartments", "About", "Contact"],
    home: {
      mainSlider: {
        titles: [
          "We define style in elegant details.",
          "Luxury is easy to find, but hard to make.",
          "We speak your language!",
          "We define style in elegant details.",
          "Luxury is easy to find, but hard to make.",
        ],
      },
    },
    apartments: {
      title: "apartments",
      price: "price",
      day: "day",
      description:
        "U okrivu našeg kompleksa smešteno je 4 luksuzna apartmana koji su kategorisani sa 4 zvezdice. Ulaz u kompleks 2500, u cenu uključena ležaljke, peškir i korišćenje bazena. Ograničen broj ljudi na 50. Rezervacije radnim danima od 08h do 16h, a subotom od 09h do 15h. Broj za rezervacije: 065/831-83-12",
      apartments: [
        {
          name: "Apartment 1",
          space: "55m2",
          price: "30",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartment 2",
          space: "75m2",
          price: "40",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartment 3",
          space: "95m2",
          price: "70",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartment 4",
          space: "45m2",
          price: "25",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartment 5",
          space: "75m2",
          price: "50",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
      ],
    },
    about: {
      title: "About",
      text: "Bella apartmani u Kruševcu nude ugodan smeštaj tokom cele godine, svima kojima je osecaj vlastitog doma najvažniji na njihovim putovanjima. Prijatan enterijer, atraktivna lokacija, pristupačne cene i domaćinska usluga su ono sto Bella apartmane na dan izdvaja od drugih. U duhu domaćinske tradicije i gostoprimljivosti našeg grada i naroda, izaćićemo u susret svakoj vašoj želji. Vođeni idejom da se svako u svom domu oseća najlepše, kreirali smo za Vas ponudu koja će Vam omogućiti da Kruševac doživite na jedan prisniji način, kao svoju kuću. Ovo je ovde dodatak da bi drzao prostor, i nzm koliko cu morati da lupetam gluposti da bih mogao da imam dovoljno teksta da popuni prostor a sa druge strane da ne moram da koristim lorem ipsum, jer, ljubi brat, ne moze vise tako... Pa nisam ja latinski ucio nego srpski. Fun fact, ovo treba da bude verzija na engleskom HAHA",
    },
    contact: {
      title: "Contact",
    },
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
  locale: "en",
  messages,
});

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
