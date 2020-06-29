<template>
    <div class="wrapper">

        <parallax class="page-header header-filter" :style="headerStyle">
          <div class="md-layout">
            <div class="md-layout-item">
              <div class="image-wrapper">

                <div class="text-white title">
                    <h1 class="text-white title mytitle">hello {{userData.firstname}}</h1>
                </div>

              </div>
            </div>
          </div>
        </parallax>


        <div class="main main-raised">
              <div class="section section-basic">
                <div class="container">
                   <h1 class="text-success title">Your user info is :  </h1>
                   <h3 class="subtitle">Email: {{userData.email}}</h3>
                    <h3 class="subtitle">Address: {{userData.address}}</h3>
                     <h3 class="subtitle">Phone: {{userData.phone}}</h3>
                <div>
              </div>

               <div class="section section-examples">
        <div class=" text-center">

               <md-button class="md-accent md-warning md-round" href="/create">CREAR PRODUCTO</md-button>

        </div>
      </div>
                </div>

              </div>
        </div>
  </div>
</template>

<script>
  import Parallax from '@/components/Parallax'

  export default {
  bodyClass: "profile-page",
  components:{
    Parallax
  },
  data() {
    return {
      product:{
        title:"",
        price: "",
        category:"",
        description:"",
        url:""
      },
      userData:{},
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
  },
  computed:{
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted: async function() {

      let userId = window.localStorage.getItem("id")

      let config = {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
          }
        }

      const response = await this.$axios.get(`http://localhost:8082/users/${userId}`, config)
      console.log(response.data)
      this.userData = response.data
  },
}
</script>
