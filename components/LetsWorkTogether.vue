<template>
  <section id="" class="text-center py-md-12 py-6 d-flex justify-center">
    <span class="col-md-9 px-0">
      <span class="">
        <h2 class="text-uppercase text-h6 bluePaiload--text">
          {{ data && data.title }}
        </h2>
        <p class="text-h3 py-1">{{ data && data.subtitle }}</p>
      </span>

      <p
        class="text-body-3 graySkill--text justify-center gs_reveal"
        v-html="data && data.paragraph"
      ></p>
      <span class="bot-border">
        <a
          :href="`mailto:${data && data.email}`"
          :class="` text-decoration-none text-uppercase `"
        >
          Write me an email <v-icon class="pl-8">mdi-email</v-icon>
        </a>
      </span>
    </span>
  </section>
</template>

<script>
import gsapPlugin from "../plugins/gsap";

export default {
  props: ["data"],
  data() {
    return {};
  },
  mounted() {
    gsapPlugin.mounted();
  },
};
</script>
<style>
.email-link {
  color: #5e99ff;
  text-decoration: none;
  display: inline-block;
}
.email-here {
  display: none;
}
@media (max-width: 768px) {
  .email-link {
    display: none;
  }
  .email-here {
    display: inline-block;
  }
}
</style>
