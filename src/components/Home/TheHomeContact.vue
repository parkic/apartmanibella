<template>
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

          <!-- CONTACT FORM -->
          <v-form ref="contactForm" style="width: 100%">
            <v-row class="mx-0">
              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  :label="$t('contact.writeUsForm.name')"
                  outlined
                  v-model="name"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  :label="$t('contact.writeUsForm.email')"
                  outlined
                  v-model="email"
                  :rules="[rules.email]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  prepend-inner-icon="mdi-format-title"
                  :label="$t('contact.writeUsForm.title')"
                  outlined
                  v-model="message.title"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-textarea
                  outlined
                  auto-grow
                  :label="$t('contact.writeUsForm.message')"
                  rows="6"
                  v-model="message.text"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-col>
              <v-col offset="1" cols="10" offset-sm="3" sm="6" class="py-0">
                <v-btn @click="sendMessage" block large color="primary">{{ $t("contact.writeUsForm.send") }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: {
        title: '',
        text: '',
      },
      name: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    sendMessage(){
      let message = {
        sender: this.name,
        email: this.email,
        title: this.message.title,
        text: this.message.text,
      }

      console.log(message);

      this.$refs.contactForm.reset();
    }
  }
}
</script>

<style>

</style>