<template>
  <div class="wrapper">

    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout row">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Find your green point</h1>

            <Map/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>



<script>

import Map from "@/components/Map";

export default {
  bodyClass: "Home-page",
  components: {
    Map
  },
  props: {
    header: {
      type: String,
      default: require("@/static/landing.jpg")
    },
  },
  data() {
    return {
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
