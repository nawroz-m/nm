<template>
  <section class="py-md-12 py-6 projects_slider" v-resize="onResize">
    <v-window show-arrows>
      <template v-slot:prev="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          class="pa-8 rounded-circle bg-transparent border arrow-left"
          >mdi-chevron-left</v-icon
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          class="pa-8 rounded-circle bg-transparent border arrow-right"
          >mdi-chevron-right</v-icon
        >
      </template>

      <h2
        :class="`text-h2 d-flex flex-column text-md-start text-center  ${
          windowSize.x > 960 ? 'absolute' : ''
        }`"
        :style="`z-index: ${windowSize.x > 960 ? 99 : 0} `"
      >
        <span class="py-1"> Recent </span>
        <span class="py-1"
          >Projects <span class="bluePaiload--text text-subtitle-1">+</span>
        </span>
      </h2>
      <span v-if="windowSize.x > 960">
        <v-window-item
          :v-if="data"
          v-for="(projects, key) in data"
          :key="key"
          :class="`${windowSize.x > 960 ? '' : 'py-10'}`"
        >
          <span class="d-md-flex align-center bg-transparent">
            <span class="col-md-6 pa-0 pr-3">
              <v-hover v-slot="{ hover }">
                <v-img
                  :src="projects[0].image.source"
                  :alt="projects[0].title"
                  class="align-end rounded-lg pa-0"
                >
                  <span v-if="hover" class="d-flex pb-9 bg-gradient pl-3">
                    <span class="border-left pr-3"></span>
                    <h3 class="text-h4">{{ projects[0].title }}</h3>
                  </span>
                </v-img>
              </v-hover>
            </span>

            <v-card height="690" class="col-md-6 overflow-auto bg-transparent">
              <v-hover v-slot="{ hover }">
                <v-img
                  :src="projects[1].image.source"
                  :alt="projects[1].title"
                  class="align-end rounded-lg pa-0"
                >
                  <span v-if="hover" class="d-flex pb-9 bg-gradient pl-3">
                    <span class="border-left pr-3"></span>
                    <h3 class="text-h4">{{ projects[1].title }}</h3>
                  </span>
                </v-img>
              </v-hover>
              <v-hover v-slot="{ hover }">
                <v-img
                  :src="projects[2].image.source"
                  :alt="projects[2].title"
                  class="align-end rounded-lg pa-0 mt-6"
                >
                  <span v-if="hover" class="d-flex pb-9 bg-gradient pl-3">
                    <span class="border-left pr-3"></span>
                    <h3 class="text-h4">{{ projects[2].title }}</h3>
                  </span>
                </v-img>
              </v-hover>
            </v-card>
          </span>
          <!-- <span v-else>
          <v-img
            :v-for="cell in projects"
            :key="cell"
            :src="`/myprojects.jpeg`"
            class="align-end rounded-lg pa-0"
          >
            <span class="d-flex pb-5 bg-gradient pl-3">
              <span class="border-left pr-3"></span>
              <h3 class="text-h4">{{ cell }}</h3>
            </span>
          </v-img>
        </span> -->
        </v-window-item>
      </span>
      <v-slide-group
        v-else
        v-model="model"
        class="pa-0 ma-0 slider-w-arrows"
        center-active
        show-arrows
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
      >
        <span
          flat
          elevation="0"
          v-for="(s_data, key) in slider_data"
          :key="key"
          class="ma-0 pa-0"
        >
          <!-- <NuxtLink  :to="n.path" class="text-decoration-none"> -->
          <v-img
            :class="`${key === 0 ? 'ml-0 ma-4' : 'ma-4'} ${
              key === slider_data.length - 1 ? 'mr-0 ma-4' : 'ma-4'
            } rounded-lg align-end`"
            width="clamp(14rem, 10.1429rem + 17.1429vw, 23rem)"
            height="clamp(17rem, 12.3125rem + 20.8333vw, 27.9375rem)"
            :src="s_data.image.source"
            aspect-ratio="1"
          >
            <span class="d-flex pb-9 bg-gradient pl-3">
              <span class="border-left pr-3"></span>
              <h3 class="text-h4">{{ s_data.title }}</h3>
            </span>
          </v-img>
          <!-- </NuxtLink> -->
        </span>
      </v-slide-group>
    </v-window>
  </section>
</template>

<style lang="scss">
.projects_slider {
  .v-slide-group__prev {
    position: absolute;
    z-index: 4;
    border-radius: 50%;
    padding: 15px;

    border: 1.4px solid #5e99ff;
    top: 38%;
    opacity: 0.9;
  }
  .v-slide-group__next {
    right: 0px;
    position: absolute;
    z-index: 4;
    border-radius: 50%;
    padding: 15px;

    border: 1.4px solid #5e99ff;
    top: 38%;
    opacity: 0.9;
  }

  .theme--dark.v-icon.v-icon.v-icon--disabled {
    color: a39d9d !important;
  }

  .v-slide-group__next {
    position: absolute;
    right: 0px;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-enter-to,
  .slide-leave {
    transform: translateX(50%);
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(-50%);
  }
  .v-icon.v-icon::after {
    background-color: transparent !important;
  }
}
</style>

<script>
export default {
  props: ["data"],
  data() {
    return {
      model: null,

      windowSize: {
        x: 0,
        y: 0,
      },
      slider_data: [],
    };
  },
  mounted() {
    this.onResize();
    if (this.data) {
      this.data.map((n_data) => {
        if (n_data.length > 1) {
          for (let i = 0; i < n_data.length; i++) {
            this.slider_data.push(n_data[i]);
          }
        }
      });
    }
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>
