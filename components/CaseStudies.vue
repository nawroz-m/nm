<template>
  <section v-if="data" class="py-md-12 py-6">
    <h2 class="text-h2 text-md-start text-center">
      Case Studies <span class="bluePaiload--text text-subtitle-1">+</span>
    </h2>

    <p class="text-center blue--text">Coming soon...</p>
    <!-- <span v-if="data" class="d-md-flex flex-wrap pt-9">
      <span v-for="(casestudy, key) in data" :key="key" class="col-md-6">
        <v-hover open-delay v-slot="{ hover }">
          <v-img :src="casestudy.image.source" class="align-end rounded-lg">
            <div v-if="hover" class="imag-height bg-gradient">
              <span class="d-flex pb-9 pl-3">
                <span class="border-left pr-3"></span>
                <h2 class="text-h4">{{ casestudy.title }}</h2>
              </span>
            </div>
          </v-img>
        </v-hover>
      </span>
    </span> -->
  </section>
</template>
<style lang="scss" scoped></style>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>
