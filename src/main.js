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
      icons: [
        {
          icon: "wifi",
          name: "Free WiFi",
          desc: "WiFi is available in the hotel rooms and is free of charge",
        },
        {
          icon: "parking",
          name: "Parking space",
          desc: "Free private parking is possible at a location nearby (reservation is needed).",
        },
        {
          icon: "city-variant",
          name: "City view",
          desc: "Neki tekst o nekom poglednu, nzm ni ja sta da se doda...",
        },
      ],
      description:
        "Boasting air-conditioned accommodation with a terrace, Bella studios & apartments is situated in Kruševac. This apartment features free private parking, room service and free WiFi. The apartment features 1 bedroom, 1 bathroom, a flat-screen TV with satellite channels, a dining area, a fully equipped kitchen, and a balcony with city views. A casino is also available for guests at the apartment.",
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
      contactInfo: "Contact information",
      writeUs: "Write us",
      writeUsText: "Do you have a question, suggestion or criticism?",
      writeUsForm: {
        name: "Full name",
        email: "Email",
        title: "Title",
        message: "Your message",
        send: "Send a message",
      },
      workTime: ["Working hours", "Monday - Sunday"],
      reservation: "Reservations",
    },
  },

  srLat: {
    menuOptions: ["Početna", "Apartmani", "O nama", "Kontakt"],
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
      title: "apartmani",
      price: "cena",
      day: "dan",
      icons: [
        {
          icon: "wifi",
          name: "Besplatan WiFi",
          desc: "Veoma brz internet je dostupan bez dodatnih nadoknada.",
        },
        {
          icon: "parking",
          name: "Parking mesto",
          desc: "Besplatan privatni parking blizu apartmana(rezervacija je obavezna).",
        },
        {
          icon: "city-variant",
          name: "Panorama",
          desc: "Neki tekst o nekom poglednu, nzm ni ja sta da se doda...",
        },
      ],
      description:
        "Boasting air-conditioned accommodation with a terrace, Bella studios & apartments is situated in Kruševac. This apartment features free private parking, room service and free WiFi. The apartment features 1 bedroom, 1 bathroom, a flat-screen TV with satellite channels, a dining area, a fully equipped kitchen, and a balcony with city views. A casino is also available for guests at the apartment.",
      apartments: [
        {
          name: "Apartman 1",
          space: "55m2",
          price: "30",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartman 2",
          space: "75m2",
          price: "40",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartman 3",
          space: "95m2",
          price: "70",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartman 4",
          space: "45m2",
          price: "25",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Apartman 5",
          space: "75m2",
          price: "50",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
      ],
    },
    about: {
      title: "O nama",
      text: "Bella apartmani u Kruševcu nude ugodan smeštaj tokom cele godine, svima kojima je osecaj vlastitog doma najvažniji na njihovim putovanjima. Prijatan enterijer, atraktivna lokacija, pristupačne cene i domaćinska usluga su ono sto Bella apartmane na dan izdvaja od drugih. U duhu domaćinske tradicije i gostoprimljivosti našeg grada i naroda, izaćićemo u susret svakoj vašoj želji. Vođeni idejom da se svako u svom domu oseća najlepše, kreirali smo za Vas ponudu koja će Vam omogućiti da Kruševac doživite na jedan prisniji način, kao svoju kuću. Ovo je ovde dodatak da bi drzao prostor, i nzm koliko cu morati da lupetam gluposti da bih mogao da imam dovoljno teksta da popuni prostor a sa druge strane da ne moram da koristim lorem ipsum, jer, ljubi brat, ne moze vise tako... Pa nisam ja latinski ucio nego srpski. Fun fact, ovo treba da bude verzija na engleskom HAHA",
    },
    contact: {
      title: "Kontakt",
      contactInfo: "Kontakt informacije",
      writeUs: "Pišite nam",
      writeUsText: "Pošaljite nam pitanje, sugestiju ili kritiku!",
      writeUsForm: {
        name: "Ime i prezime",
        email: "Email",
        title: "Naslov",
        message: "Vaša poruka",
        send: "Pošaljite poruku",
      },
      workTime: ["Radno vreme", "Ponedeljak - Nedelja"],
      reservation: "Rezervacije",
    },
  },

  srCir: {
    menuOptions: ["Почетна", "Апартмани", "О нама", "Контакт"],
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
      title: "апартмани",
      price: "цена",
      day: "дан",
      icons: [
        {
          icon: "wifi",
          name: "Весплатан WiFi",
          desc: "Веома брз интернет је доступан без додатних надокнада.",
        },
        {
          icon: "parking",
          name: "Паркинг местo",
          desc: "Бесплатан приватни паркинг близу апартмана(неопходна резервација).",
        },
        {
          icon: "city-variant",
          name: "Панорамски поглед",
          desc: "Neki tekst o nekom poglednu, nzm ni ja sta da se doda...",
        },
      ],
      description:
        "Boasting air-conditioned accommodation with a terrace, Bella studios & apartments is situated in Kruševac. This apartment features free private parking, room service and free WiFi. The apartment features 1 bedroom, 1 bathroom, a flat-screen TV with satellite channels, a dining area, a fully equipped kitchen, and a balcony with city views. A casino is also available for guests at the apartment.",
      apartments: [
        {
          name: "Апартман 1",
          space: "55m2",
          price: "30",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Апартман 2",
          space: "75m2",
          price: "40",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Апартман 3",
          space: "95m2",
          price: "70",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Апартман 4",
          space: "45m2",
          price: "25",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
        {
          name: "Апартман 5",
          space: "75m2",
          price: "50",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisl vel elit lobortis mattis. Proin et tincidunt nisl. Vivamus id consectetur orci. Donec bibendum lacus ac libero pharetra lobortis. In hac habitasse platea dictumst. Maecenas pellentesque, nisl non ornare placerat, turpis augue iaculis diam, ac ornare lectus est nec nisl. Phasellus quis enim et sapien tincidunt tempus nec a ex. Aliquam at dignissim lorem, vitae blandit lorem. In vel elit sed enim imperdiet ultrices eu quis dolor. Nam sed lorem rutrum, hendrerit lacus in, eleifend neque. Morbi sed erat lacinia eros imperdiet pretium. Vestibulum sit amet accumsan odio. Donec eget viverra sem, vel volutpat sapien. Nulla facilisi. Vivamus nibh erat, tempor vitae aliquam in, pharetra pellentesque dui. Pellentesque lacinia risus risus, at venenatis sem consequat eu. Maecenas et gravida sapien. Ut viverra feugiat lectus a aliquam. Phasellus eleifend lacus vestibulum, scelerisque dolor ut, consectetur sem. Phasellus hendrerit maximus nisi nec malesuada. Etiam quis tempor purus, ut suscipit dui. Pellentesque semper condimentum felis eu egestas. Etiam rutrum sem eget enim posuere, non mollis nunc cursus. Sed feugiat consectetur lacinia. Mauris malesuada in sapien eu fringilla. Maecenas massa sapien, blandit eget nisi non, dictum vestibulum ligula. Fusce et faucibus ex. Nullam sed nisi ac dui vestibulum posuere. Sed at pulvinar purus, sit amet mattis ante. Ut ornare consectetur justo.",
        },
      ],
    },
    about: {
      title: "O нама",
      text: "Bella apartmani u Kruševcu nude ugodan smeštaj tokom cele godine, svima kojima je osecaj vlastitog doma najvažniji na njihovim putovanjima. Prijatan enterijer, atraktivna lokacija, pristupačne cene i domaćinska usluga su ono sto Bella apartmane na dan izdvaja od drugih. U duhu domaćinske tradicije i gostoprimljivosti našeg grada i naroda, izaćićemo u susret svakoj vašoj želji. Vođeni idejom da se svako u svom domu oseća najlepše, kreirali smo za Vas ponudu koja će Vam omogućiti da Kruševac doživite na jedan prisniji način, kao svoju kuću. Ovo je ovde dodatak da bi drzao prostor, i nzm koliko cu morati da lupetam gluposti da bih mogao da imam dovoljno teksta da popuni prostor a sa druge strane da ne moram da koristim lorem ipsum, jer, ljubi brat, ne moze vise tako... Pa nisam ja latinski ucio nego srpski. Fun fact, ovo treba da bude verzija na engleskom HAHA",
    },
    contact: {
      title: "Контакт",
      contactInfo: "Контакт информације",
      writeUs: "Пишите нам",
      writeUsText: "Пошаљите нам питање, сугестију или критику!",
      writeUsForm: {
        name: "Име и презиме",
        email: "Email",
        title: "Наслов",
        message: "Ваша порука",
        send: "Пошаљите поруку",
      },
      workTime: ["Радно време", "Понедељак - Недеља"],
      reservation: "Резервације",
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
