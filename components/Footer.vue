<template>
  <v-container class="">
    <footer class="d-flex justify-space-between bg-transparent align-center">
      <p class="graySkill--text text-body-2">Build from scratch by me</p>
      <span class="">
        <v-img width="80" src="/light_icon.png" :alt="title"> </v-img>
        <strong class="d-sr-only">{{ title }}</strong>
      </span>
    </footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Nawroz Mohammadi",
    };
  },
};
</script>
