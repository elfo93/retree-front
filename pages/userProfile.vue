<template>
    <div class="wrapper">
      <div class="section">
       <div class="md-size-50 md-small-size-70 md-xsmall-size-100">
      <form class="md-layout">
        <div class="md-layout-item" style="weidh">
          <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> -->
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
            </div>

        </form>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
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
