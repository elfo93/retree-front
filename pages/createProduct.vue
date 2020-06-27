<template>
  <div class="wrapper">
     <div class="md-size-50 md-small-size-70 md-xsmall-size-100">
        <parallax class="section page-header header-filter" :style="headerStyle"></parallax>

            <div class="main main-raised">
              <div class="section profile-content mysection">
                <div class="container">

                  <div class="section">
                    <div class="container">
                      <h1>Crea tu producto</h1>
                      <form>

                          <div>
                            <input placeholder="title" v-model="product.title" type="text"/>
                            <input placeholder="price" v-model="product.price" type="number"/>
                            <input placeholder="description" v-model="product.description" type="text"/>
                            <input placeholder="url" v-model="product.image" type="text"/>
                            <select class="form-control" id="exampleFormControlSelect1" v-model="product.category">
                                <option>textil</option>
                                <option>vidrio</option>
                                <option>envases</option>
                                <option>otros</option>
                            </select>
                            <button @click.prevent="addProduct">Subir producto</button>
                          </div>
                      </form>

                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import  Tabs  from "@/components/Tabs";
import Parallax from "@/components/Parallax";

export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      product:{
        title:"",
        price: "",
        category:"",
        description:"",
        url:""
      },

    };
  },
  props: {
    header: {
      type: String,
      default: require("@/static/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/static/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods:{

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
          url: this.product.url
        } // vincular el autor?
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
  }
};
</script>


<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
