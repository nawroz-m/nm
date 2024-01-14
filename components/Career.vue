<template>
  <section class="py-md-12 text-md-start text-center py-6" v-resize="onResize">
    <span
      :class="`${
        windowSize.x > 700
          ? 'd-flex flex-wrap justify-space-between align-center'
          : ''
      } `"
    >
      <h2 class="text-h2 text-center">
        My Careers <span class="bluePaiload--text text-subtitle-1">+</span>
      </h2>
      <span v-if="windowSize.x > 700" class="bot-border">
        <a
          href="https://drive.google.com/file/d/1PF3woMOrf6S9v5Tx-0DwTWz8-xeYuyEj/view?usp=sharing"
          target="_blank"
          class="text-decoration-none"
        >
          <span class="px-3 text-uppercase white--text text-body-2">
            Get Cv <v-icon class="pl-8">mdi-file-account-outline</v-icon>
          </span>
        </a>
      </span>
    </span>
    <div v-if="data" class="d-flex flex-wrap">
      <v-card
        v-for="(positions, key) in data"
        :key="key"
        :class="`bg-transparent pa-0 col-md-6 col-12 my-4`"
        flat
        elevation="0"
      >
        <h3 class="pa-0 text-h4 my-4">
          <span class="border-left pr-3"></span
          ><span>{{ positions.company }} </span>
        </h3>

        <ul class="pl-0 gs_reveal">
          <li class="text-body-2 mt-n3">{{ positions.role }}</li>
          <li class="text-body-1 graySkill--text py-2">{{ positions.date }}</li>
        </ul>
      </v-card>
    </div>
    <span v-if="windowSize.x <= 700" class="bot-border py-3">
      <a
        href="https://drive.google.com/file/d/1PF3woMOrf6S9v5Tx-0DwTWz8-xeYuyEj/view?usp=sharing"
        target="_blank"
        class="text-decoration-none"
      >
        <span class="px-3 text-uppercase white--text text-body-2">
          Get Cv <v-icon class="pl-8">mdi-file-account-outline</v-icon>
        </span>
      </a>
    </span>
  </section>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>

<script>
import gsapPlugin from "../plugins/gsap";

export default {
  props: ["data"],
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    gsapPlugin.mounted();
    this.onResize();
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>
