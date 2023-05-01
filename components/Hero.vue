<template>
  <section
    tag="hero"
    v-if="windowSize.x > 960"
    class="d-md-flex align-center col-12 pa-0 py-12"
    v-resize="onResize"
  >
    <div :class="`col-md-6  pa-0`">
      <h2 class="d-flex flex-column">
        <span attr="Web" class="text-h4 hero-wlc">Hi, it's me</span>

        <span attr="Developer" class="text-h1 py-9 hero-wlc"
          >{{ hero && hero.name
          }}<span
            class="pa-3 ml-1 mb-n1 bluePaiload rounded-circle d-inline-block"
          >
          </span
        ></span>
      </h2>

      <p
        class="text-body-1 graySkill--text col-md-9 pa-0 gs_reveal text-justify"
        v-html="hero && hero.about_me"
      ></p>

      <v-hover v-slot="{ hover }">
        <v-btn
          v-if="hero && hero.button"
          text
          plain
          elevation="0"
          @click="scrollToMySkillSet(hero.button.id)"
          :class="`${hover ? '' : 'pa-0'}  rounded-0 bot-border `"
        >
          {{ hero.button.text }}
        </v-btn>
      </v-hover>
    </div>

    <div :class="`col-md-6 pa-0 `">
      <v-img
        class=""
        max-width="400"
        v-if="hero && hero.image"
        :src="hero.image.path"
        :alt="hero.image.alt"
      ></v-img>
    </div>
  </section>
  <section v-else v-resize="onResize">
    <v-img
      v-if="hero && hero.image"
      :src="hero.image.path"
      :alt="hero.image.alt"
      class="align-center"
    >
      <div :class="` `">
        <h2 class="d-flex flex-column text-center">
          <span attr="Web" class="text-h4 hero-wlc">Hello, it's me</span>

          <span attr="Developer" class="text-h1 py-9 hero-wlc"
            >{{ hero.name }}
            <span
              class="pa-3 ml-n5 mb-n1 bluePaiload rounded-circle d-inline-block"
            >
            </span>
          </span>
        </h2>

        <p
          class="text-body-1 graySkill--text gs_reveal text-justify"
          v-html="hero.about_me"
        ></p>
      </div>
    </v-img>
  </section>
</template>

<style lang="scss"></style>

<script>
import gsapPlugin from "../plugins/gsap";

export default {
  props: ["hero"],
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

    scrollToMySkillSet(id) {
      const options = {
        duration: 1000, // scroll duration in milliseconds
        offset: 90, // offset from the target element (in pixels), use negative value to scroll above the element
        easing: "easeInOutCubic", // easing function for the scroll animation
      };
      this.$vuetify.goTo(id, options);
    },
  },
};
</script>
