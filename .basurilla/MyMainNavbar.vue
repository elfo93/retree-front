<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <md-list>
              <md-list-item
                href="/login"
              >
                <i class="material-icons">login</i>
                <p>login</p>
              </md-list-item>

              <md-list-item
                href="/greenMarket"
              >
                <i class="material-icons">eco</i>
                <p>greenMarket</p>
              </md-list-item>

              <md-list-item
                href="/"
              >
                <i class="material-icons">home</i>
                <p>Home</p>
              </md-list-item>

              <md-list-item
                href="/register"
              >
                <i class="material-icons">fingerprint</i>
                <p>register</p>
              </md-list-item>

              <md-list-item
                href="/order"
              >
                <i class="material-icons">shopping_cart</i>
                <p>Cart</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>


  </md-toolbar>
</template>
<script>

export default {
  data() {

  },
  computed: {

  },
  methods: {

  }
};
</script>
