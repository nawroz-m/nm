<template>
  <v-app dark tile class="ma-0 pa-0">
    <Header />

    <v-main class="main">
      <v-container>
        <Nuxt />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.main {
  background-color: #000;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "Vuetify.js",
    };
  },
};
</script>
