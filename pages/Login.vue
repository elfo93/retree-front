<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <loginCard header-color="green">
              <h3 slot="title" class="card-title">LOGIN</h3>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <!-- <md-field href="/restart">
                <i class="material-icons">sentiment_satisfied_alt</i>
                      <p>¿has olvidado la contraseña?</p>
              </md-field> -->
              <md-button slot="footer"   @click.prevent="login" type="submit" value="Login" class="md-simple md-success md-lg">
                Get Started
              </md-button>
            </loginCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import  LoginCard  from "@/components/cards/LoginCard";

export default {

  components: {
    LoginCard
  },

  bodyClass: "login-page",

  data() {
    return {
      isAuth: false,
      email: null,
      password: null
    };
  },

  methods: {

    checkAuth(){
    this.isAuth = window.localStorage.getItem("token")!== null //mira si existe el token guardado en localStorage
    },

		async login(){

      let loginData = {
        email: this.email,
        password: this.password
      }

      try {

        const response= await this.$axios.post("http://localhost:8082/auth/login", loginData)

        console.log(response.data)

        window.localStorage.setItem("token", response.data)

        this.checkAuth()
        this.$router.push('/greenMarket')

      } catch(err){

        console.log(err.response.data.error)
      }

    },	async logout(){
    	window.localStorage.removeItem("token")
      this.checkAuth()
      this.$router.push('/greenMarket')
    }

  },

  props: {
    header: {
      type: String,
      default: require("@/static/login.jpg")
    }
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

<style lang="css"></style>


