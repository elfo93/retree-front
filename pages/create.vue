<template>
    <div class="wrapper">

        <parallax class="page-header header-filter" :style="headerStyle">
          <div class="md-layout">
            <div class="md-layout-item">
              <div class="image-wrapper">

                <div class="text-white title">
                    <h1 class="text-white title mytitle">time to create,  {{userData.firstname}}</h1>
                </div>

              </div>
            </div>
          </div>
        </parallax>



               <div class="main main-raised">
              <div class="section section-basic">
                <div class="container">
                   <h1 class="text-success title"> Crear Producto </h1>
                   <form class="md-layout">
                      <div class="md-layout-item" style="weidh">

                        <div style="margin-button:30px">

                           <md-field class="md-form-group" slot="inputs">
                           <label class="lalabel">Title</label>
                           <md-input v-model="product.title" type="text"></md-input>
                           </md-field>

                            <md-field class="md-form-group" slot="inputs">
                           <label class="lalabel">Price</label>
                           <md-input v-model="product.price" type="text"></md-input>
                           </md-field>

                            <md-field class="md-form-group" slot="inputs">
                           <label class="lalabel">Description</label>
                           <md-input v-model="product.description" type="text"></md-input>
                           </md-field>

                            <md-field class="md-form-group" slot="inputs">
                           <label class="lalabel">url</label>
                           <md-input v-model="product.image" type="text"></md-input>
                           </md-field>

                           <div class="md-layout-item">
                              <md-field>
                                <label style="padding-left:15px" for="category">Category</label>
                                <md-select v-model="product.category">
                                  <md-option value="textil">textil</md-option>
                                  <md-option value="vidrio">vidrio</md-option>
                                  <md-option value="envases">envases</md-option>
                                  <md-option value="otros">otros</md-option>
                                </md-select>
                              </md-field>
                            </div>
                           <md-button @click.prevent="addProduct" class=" md-success md-round md-lg">Subir producto</md-button>


                      </div>
                    </div>
                  </form>
                <div>

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
        image:""
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
  methods:{
    checkAuth(){
      this.isAuth = window.localStorage.getItem("token")!= null
    },

    logout(){
      this.isAuth = window.localStorage.removeItem("token")
      this.checkAuth()
      this.$router.push('/login')
    },
    async addProduct(){
        let config = {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
          }
        }
        let newProduct = {
          title: this.product.title,
          price: this.product.price,
          description: this.product.description,
          category: this.product.category,
          url: this.product.image
        }
        try {
          console.log('llega aqui')
          console.log(config)
          let response = await this.$axios.post("http://localhost:8082/products", newProduct, config)
          console.info('has creado el producto correctamente')
          this.$router.push('/greenMarket')
        } catch(err) {
          console.log('no se conecta')
        }
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
