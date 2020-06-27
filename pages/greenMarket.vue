<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="text-white title">
              <h1 class="text-white title mytitle">GREEN MARKET</h1>
            </div>
            <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow" />
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />

                 <div>
                    <h1 class="text-white title subtitle">by</h1>
                    <img class="logo" src="../static/marca-retree-2.png" width="50%" height="50%" alt="logo" />
                 </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
           <div class="md-layout md-gutter">
           <md-button v-for="(category, index) in categories" :key="index" class="md-white md-layout-item" @click.prevent="changeSelectedCategory(category.slug)">{{category.label}}</md-button>
          </div>
        </div>
      </div>

      <div class="section section-white mainsection">
        <div class="container">

          <div class="md-layout md-gutter">

          <ProductItem v-for="product in productFiltered" class="md-layout-item space-between" :key="product._id"  :product="product" @click="addToCart"/>

          </div>

        </div>
      </div>


      <div class="section">
        <div class="container">

        </div>
      </div>


      <div class="section section-notifications">
        <div class="container">

            <Cart :order="listOrder" :total="totalPrice" @click="removeItem" ></Cart>

        </div>
      </div>

      <div class="section section-examples">
        <div class="container text-center">

               <md-button class="md-accent md-success md-round" @click.prevent="sendOrder">process order</md-button>

        </div>
      </div>


      <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
            >

            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Parallax from '@/components/Parallax'
import Cart from '@/components/Cart'
import ProductItem from '@/partials/ProductItem'

export default {
  components: {
    Parallax,
    Cart,
    ProductItem
  },
  name: "greenMarket",
  bodyClass: "greenMarket-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/vue-mk-header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/leaf4.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/leaf2.png")
    },
    signup: {
      type: String,
      default: require("@/assets/city.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/profile.jpg")
    }
  },
  data() {
    return {
      selectedCategory : "textil",
      categories : [
        {label: "textil", slug: "textil"},
        {label: "envases", slug: "envases"},
        {label: "vidrio", slug: "vidrio" },
        {label: "otros", slug: "otros"}
      ],
      products : [],
      leafShow: false
    };
  },
  mounted: async function(){
    const response = await this.$axios.get("http://localhost:8082/products")
    this.products = response.data
    console.log(this.products)
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  methods: {
    changeSelectedCategory(slug){
      this.selectedCategory = slug
    },
    addToCart(item) {
      console.info(item,"Evento")
      this.$store.commit("addItem", item)
    },
    removeItem(item){
      this.$store.commit("removeItem", item)
    },
    async sendOrder(){
      console.log(this.listOrder)
      // como vincular el pedido con el user ??
        let config = {
           headers: {'Authorization': `Bearer ${window.localStorage.getItem("token")}`
              }
        }
        try {
          let response = await this.$axios.post("http://localhost:8082/orders", this.listOrder , config)
          this.$router.push('/order')
        } catch(err) {
          alert('tienes que registrarte para poder comprar :)')
          console.log('no se conecta')
        }
    },
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  filters: {
    toMoney:
      function(value){
         return new Intl.NumberFormat("es-ES", {style: "currency", currency: "EUR"}).format(value)
      }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    },
    productFiltered(){
      return this.products.filter((product) => product.category === this.selectedCategory)
    },
    listOrder() {
      return this.$store.state.listOrder
    },
    totalPrice() {
      if (this.listOrder.length === 0) {
        return 0;
      }
      let total = this.listOrder.map(item => item.price * item.quantity);
      total = total.reduce((sum, current) => sum + current);
      return total;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
