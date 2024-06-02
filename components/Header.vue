<template>
  <header class="ma-0">
    <nav class="header-nav pa-3 px-md-6">
      <h1>
        <NuxtLink to="/">
          <v-img width="80" src="./light_icon.png" :alt="title"> </v-img>
          <strong class="d-sr-only">{{ title }}</strong>
        </NuxtLink>
      </h1>
    </nav>
  </header>
</template>

<style lang="scss">
.header-nav {
  position: fixed;
  top: 0px;
  z-index: 200;
  width: 100%;
  height: 100px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#000),
    color-stop(59%, rgba(0, 0, 0, 0.8)),
    to(transparent)
  );
  background-image: linear-gradient(
    180deg,
    #000,
    rgba(0, 0, 0, 0.8) 59%,
    transparent
  );
}
</style>

<script>
export default {
  data() {
    return {
      title: "Nawroz Mohammadi",
    };
  },
};
</script>
