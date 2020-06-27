<template>

 <!-- v-if="order.lenght" -->

          <table class="table">
            <thead>
              <tr class= "text-success title mycart">
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Imagen</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in order" :key="item._id" class="text-success mycartsubtitle">
                <th scope="row">{{item.title}}</th>
                <td>{{item.quantity}}</td>
                <td>{{item.price}}</td>
                <td><img :src="item.image" style="max-width: 5rem "></td>
                <td> <md-button @click="removeItem(item)" class="md-warning md-round md-just-icon"><md-icon>highlight_off</md-icon></md-button></td>
              </tr>

              <tr class="text-success mycartsubtitle">
                <th scope="row">Total</th>
                <td>{{total | toMoney}}</td>
              </tr>
            </tbody>
          </table>

</template>


<script>
export default {
  props: ["order","total"],
  methods: {
    removeItem(item){
      this.$emit("click", item)
    }
  },
  filters: {
    toMoney:
      function(value){
         return new Intl.NumberFormat("es-ES", {style: "currency", currency: "EUR"}).format(value)
      }
  },
}
</script>
