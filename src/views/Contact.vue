<template>
  <div>
    <v-img :src="require('@/assets/images/300703408.jpg')" height="70vh">
      <v-layout fill-height>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h3 class="subtitle text-uppercase" style="font-family: 'Oswald', sans-serif; font-size: 2.5em; color: aliceblue;">
              {{$t("contact.title")}}
            </h3>
          </v-col>
        </v-row>
      </v-layout>
    </v-img>

    <TheHomeContact />
  </div>
</template>

<script>
import TheHomeContact from "@/components/Home/TheHomeContact.vue"
export default {
  components: {
    TheHomeContact
  }

}
</script>

<style>

</style>