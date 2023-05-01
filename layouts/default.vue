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

  // background: linear-gradient(-45deg, #0a0a0a, #130c15, #0c000c, #000f08);

  // background-size: 400% 400%;
  // animation: gradient 5s ease infinite;
  // height: 100vh;
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
