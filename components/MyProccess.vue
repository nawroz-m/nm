<template>
  <section
    id="myproccess"
    class="py-md-12 py-6 text-center text-md-start"
    v-resize="onResize"
  >
    <!-- <v-img src="/microscope.png" class="align-center"> -->
    <h2 class="text-h2 relative z-index-1">
      {{ data && data.title }}
      <span class="bluePaiload--text text-subtitle-1">+</span>
    </h2>

    <v-img
      v-if="data && data.image"
      :max-width="windowSize.x > 960 ? 500 : ''"
      :src="data.image.path"
      :alt="data.image.alt"
      class="absolute bg_myproccess_img"
    >
    </v-img>
    <span class="d-flex flex-wrap justify-space-between col-12 pa-0 mb-6">
      <v-card
        v-for="(process, key) in data && data.process"
        :v-if="data && data.process"
        :key="key"
        :attr="'0' + (key + 1)"
        class="bg-transparent col-md-4 col-sm-6 pa-0 pt-12 process_list"
        flat
        elevation="0"
      >
        <h3 class="pa-0 text-h4 my-4 text-capitalize">{{ process.title }}</h3>

        <div
          v-for="(step, key) in process.steps"
          :key="key"
          flat
          elevation="0"
          class="bg-transparent pa-0 text-body-2 col-md-8 text-md-start text-center gs_reveal"
        >
          {{ step.text }}
        </div>
      </v-card>
    </span>
    <!-- </v-img> -->
  </section>
</template>

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
    this.onResize();

    gsapPlugin.mounted();
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>
