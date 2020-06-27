<template>
  <div class="wrapper">

    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Your Story Starts With Us.</h1>
            <h4>
              Every landing page needs a small description after the big bold
              title, that's why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4>

            <Map/>

             <!-- <div>
                <div v-if="$store.state.auth">
                  <p>
                    You are authenticated. You can see the
                    <NuxtLink to="/greenMarket">
                      secret page
                    </NuxtLink>!
                  </p>
                </div>
                <p v-else>
                  Please
                  <NuxtLink to="/login">
                    login
                  </NuxtLink>.
                </p>
              </div> -->

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
