<template>
  <section id="myskillset" class="d-md-flex align-center py-md-12 py-6">
    <div class="col-md-6 pa-0 text-center text-md-start py-10 py-md-0">
      <h2 class="text-uppercase text-h6 bluePaiload--text">
        {{ mySkillset && mySkillset.title }}
      </h2>
      <p
        class="text-capitalize text-h3 col-md-9 pa-0 gs_reveal"
        v-html="mySkillset && mySkillset.subtitle"
      ></p>

      <v-hover v-slot="{ hover }">
        <v-btn
          v-if="mySkillset && mySkillset.button"
          text
          plain
          @click="
            mySkillset.button.type === 'scroll'
              ? scrollToMyProccess(mySkillset.button.id)
              : ''
          "
          :class="`${hover ? '' : 'pa-0'}  rounded-0 bot-border`"
        >
          <a
            v-if="mySkillset.button.type === 'link'"
            :href="mySkillset.button.link"
            target="_blank"
            class="text-decoration-none white--text"
          >
            {{ mySkillset.button.text }}
            <v-icon color="#5e99ff"> mdi-{{ mySkillset.button.icon }} </v-icon>
          </a>
          <span v-else>{{ mySkillset.button.text }} </span>
        </v-btn>
      </v-hover>
    </div>

    <p
      class="col-md-6 text-body-1 pa-0 graySkill--text text-justify"
      v-html="mySkillset && mySkillset.paragraph"
    ></p>
  </section>
</template>

<script>
import gsapPlugin from "../plugins/gsap";

export default {
  props: ["mySkillset"],
  data() {
    return {};
  },
  mounted() {
    gsapPlugin.mounted();
  },
  methods: {
    scrollToMyProccess(id) {
      const options = {
        duration: 1500, // scroll duration in milliseconds
        offset: 90, // offset from the target element (in pixels), use negative value to scroll above the element
        easing: "easeInOutCubic", // easing function for the scroll animation
      };
      this.$vuetify.goTo(id, options);
    },
  },
};
</script>
