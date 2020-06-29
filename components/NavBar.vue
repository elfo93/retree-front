<template>
 <md-toolbar class="md-transparent md-absolute justify-content-between">
              <div class="md-toolbar-row">
                <div>
                  <a  href="/">
                    <img src="../static/marca-retree-peque.png" width="130" height="130" class="d-inline-block align-top logo-nav" alt="" loading="lazy">
                  </a>
                </div>

                <div class="md-toolbar-section-end">

                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

                    <md-list class="align-items-end">

                      <md-list-item href="/">
                        <i class="material-icons">home</i>
                        <p>Home</p>
                      </md-list-item>

                      <md-list-item href="/greenMarket">
                        <i class="material-icons">eco</i>
                        <p>greenMarket</p>
                      </md-list-item>

                      <md-list-item href="/login"
                      v-if="!isAuth">
                      <i class="material-icons">fingerprint</i>
                      <p>login</p>
                      </md-list-item>

                      <md-list-item href="/myProfile"
                      v-if="isAuth" >
                      <i class="material-icons">face</i>
                      <p>profile</p>
                      </md-list-item>

                       <md-list-item href="/login"
                      v-if="isAuth" @click="logout">
                      <i class="material-icons">logout</i>
                      <p>logout</p>
                      </md-list-item>

                      <md-list-item class="md-list-item" v-if="!isAuth">
                        <a
                          href="javascript:void(0)"
                          class="md-list-item-router md-list-item-container md-button-clean"
                        >
                          <div class="md-list-item-content">
                            <md-button  href="/register" class="md-warning md-round"
                              >Register</md-button
                            >
                          </div>
                        </a>
                      </md-list-item>

                    </md-list>
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

  mounted(){
    this.checkAuth();
  },
  methods:{
    checkAuth(){
      this.isAuth = window.localStorage.getItem("token")!= null
    },

    logout(){
      this.isAuth = window.localStorage.removeItem("token")
      this.checkAuth()
      this.$router.push('/login')
    }
  },
  computed:{
    listOrder() {
      return this.$store.state.listOrder
    }
  }
}
</script>
