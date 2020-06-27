<template>

              <md-card class="md-card border myborder">

                <div class="md-card-image">
                   <img class="myborder"  :src="product.image" style="max-height: 30rem">
                    <md-card-media class="header">

                    <div class="md-title">
                      <div class="subtitle">{{product.title}}
                    {{product.price | toMoney}}</div>
                    </div>
                     </md-card-media>
                </div>

                <md-card-expand md-alignment="space-between">

                     <md-card-actions md-alignment="space-between">

                        <md-card-expand-trigger>
                          <md-button class="md-success md-icon-button md-round md-just-icon">
                              <md-icon>keyboard_arrow_down</md-icon>
                          </md-button>

                        </md-card-expand-trigger>

                         <div>
                          <md-button class="md-success md-round" @click.prevent="addToCart()" >add to cart</md-button>
                        </div>
                      </md-card-actions>

                      <md-card-expand-content>
                        <md-card-content>
                          {{product.description}}
                        </md-card-content>
                      </md-card-expand-content>

                  </md-card-expand>
              </md-card>
</template>

<script>
export default {
  props: ["product"],
  filters: {
    toMoney:
      function(value){
         return new Intl.NumberFormat("es-ES", {style: "currency", currency: "EUR"}).format(value)
      }
  },
	methods:{
		addToCart(){
			this.$emit("click", this.product)
		}
	}
}
</script>
