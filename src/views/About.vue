<template>
  <div>
    <v-img :src="require('@/assets/images/300700769.jpg')" height="70vh">
      <v-layout fill-height>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h3 class="subtitle text-uppercase" style="font-family: 'Oswald', sans-serif; font-size: 2.5em; color: aliceblue;">
              {{$t("about.title")}}
            </h3>
          </v-col>
        </v-row>
      </v-layout>
    </v-img>
    
    <div class="px-4 pt-15">
      <v-row>
        <!-- heading -->
        <v-col cols="12" class="headline">
          <span style="border-bottom: 2px solid #1976d2">
            <b>{{ $t("title").split(" ")[0] }}</b> {{ $t("title").split(" ").slice(1).join(' ') }}
          </span>
        </v-col>
        <!-- text -->
        <v-col cols="12">
          <p>{{ $t("about.text") }}</p>
        </v-col>

        <!-- A bid -->
        <v-col cols="12" class="headline mt-8">
          <span style="border-bottom: 2px solid #1976d2">
            {{ $t("about.bid.title") }}
          </span>
        </v-col>
        <v-col>
          <p v-for="(paragr, idx) in $t('about.bid.text')" :key="idx">
            {{ paragr }}
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
