<template>
 <md-toolbar class="md-transparent md-absolute">
              <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                  <a class="" href="/">
                    <img src="../static/marca-retree-peque.png" width="150" height="150" class="d-inline-block align-top logo-nav" alt="" loading="lazy">
                  </a>
                </div>
                <div class="md-toolbar-section-end">
                  <md-button
                    class="md-just-icon md-simple md-white md-toolbar-toggle"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </md-button>

                  <div class="md-collapse">

                    <md-list>
                      <md-list-item
                        href="/"
                      >
                        <i class="material-icons">home</i>
                        <p>Home</p>
                      </md-list-item>


                      <md-list-item
                        href="/greenMarket"
                      >
                        <i class="material-icons">eco</i>
                        <p>greenMarket</p>
                      </md-list-item>

                      <md-list-item href="/login"
                      >
                      <i class="material-icons">fingerprint</i>
                      <p>login</p>
                      </md-list-item>

                      <li class="md-list-item">
                        <a
                          href="javascript:void(0)"
                          class="md-list-item-router md-list-item-container md-button-clean"
                        >
                          <div class="md-list-item-content">
                            <md-button  href="/register" class="md-warning md-round"
                              >Register</md-button
                            >
                          </div>

                          <md-list-item href="/order" v-if="listOrder.length!==0" class=" md-button md-warning md-round"> <i class="material-icons">shopping_cart</i></md-list-item>
                        </a>
                      </li>

                    </md-list>
                  </div>
                </div>
              </div>
            </md-toolbar>
</template>


<script>
export default {
  data(){
    return {
      isAuth: false
    }
  },
  computed:{
    listOrder() {
      return this.$store.state.listOrder
    },
    checkAuth() {
      let token = window.localStorage.getItem("token")
      if(token!==null){
        this.isAuth = true
      }
    }
  }
}
</script>
