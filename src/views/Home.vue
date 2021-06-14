<template>
  <div>
    <!-- First slider -->
    <TheMainSlider />

    <!-- Apartments -->
    <TheHomeApartments />

    <!-- About -->
    <TheHomeAbout data-aos="fade-up" data-aos-duration="1500" />

    <!-- Contact -->
    <TheHomeContact />

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
import TheMainSlider from "@/components/Home/TheMainSlider.vue";
import TheHomeApartments from "@/components/Home/TheHomeApartments.vue";
import TheHomeAbout from "@/components/Home/TheHomeAbout";
import TheHomeContact from "@/components/Home/TheHomeContact.vue"

export default {
  components: {
    TheMainSlider,
    TheHomeApartments,
    TheHomeAbout,
    TheHomeContact,
  },
  data: () => ({}),
};
</script>

<style>
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
