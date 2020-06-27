<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-50 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">

            <loginCard header-color="green">
              <h3 slot="title" class="card-title">REGISTER</h3>

             <md-field class="md-form-group md-layout" slot="inputs">

                <md-icon>face</md-icon>
                <div class="col-5">
                  <md-input class="md-layout-item" v-model="firstname" type="text"></md-input>
                  <label >First Name</label>
                </div>

                <div class="col-5">
                  <md-input  class="md-layout-item" v-model="lastname" type="text"></md-input>
                  <label>Last Name</label>
                </div>

              </md-field>

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

              <md-field class="md-form-group" slot="inputs">
                <md-icon>eco</md-icon>
                <label>Repeat Password...</label>
                <md-input v-model="repeatPassword" type="password"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>home</md-icon>
                <label>Address</label>
                <md-input v-model="address" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>add_ic_call</md-icon>
                <label>Telephone</label>
                <md-input v-model="phone"  type="number"></md-input>
              </md-field>-->

              <md-button @click.prevent="register" type="submit" value="register" slot="footer" class="md-simple md-success md-lg">
                REGISTER
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
  bodyClass: "register-page",
  data() {
    return {
      isAuth: false,
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      repeatPassword: null,
      phone: null,
      address: null,
    };
  },
  methods:{

  async register() {

      let userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        address: this.address,
        phone: this.phone
      }

      let repeatPassword = this.repeatPassword

      if(this.password!==this.repeatPassword) {
          alert("las contraseñas son diferentes")
          return
        }

      try {

        const response = await this.$axios.post('http://localhost:8082/users', userData);

        this.$router.push("/login")

        } catch(err){

        console.log(err)

        }
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
}
</script>

<style lang="css">
 .container{
   margin-top: 100px
 }
</style>
