<template>
  <div>
    <div>
      <!-- <div>
        <h1>Your coordinates: </h1>
        <p>{{myCoordinates.lat}} Latitude, {{myCoordinates.lng}} Longitude</p>
      </div>

      <div>
        <h1>Map coordinates: </h1>
        <p>{{mapCoordinates.lat}} Latitude, {{mapCoordinates.lng}} Longitude</p>
      </div> -->
    </div>

     <md-button v-for="(item, index) in pois" :key="index" class="md-success" @click="openCategoryMarkers(item.markers, item.description)">{{item.label}}</md-button>
     <h2 class="subtitle">{{currentDescription}}</h2>

    <GmapMap :center="myCoordinates" :zoom="10" map-type-id="terrain" style="height:300px" ref="mapRef" @dragend="handleDrag">
        <gmap-marker v-for="(poi,index) in currentPois"
        :key="index"
        :position="poi"
        :clickable="true"
        :icon="eco"
        :setPosition="poi"
        :draggable="true"/>

    </GmapMap>




  </div>
</template>


<script>
export default {
  data(){
    return {
      map: null,
      myCoordinates: {
        lat : 0,
        lng : 0
      },
      currentPois: [],
      currentDescription:"",

      pois:[
        {
          "label": "Aceite" ,
          "description": "Debes reciclarlo siempre dentro de un envase de plástico, en los puntos limpios indicados en el mapa. Tambien puedes aprender a hacer jabón :)",
          "markers": [
          {label: "ounto 1", lat: 36.7346, lng: -4.40793 },
          ]
        },
         {
          "label": "aparatos tecnológicos" ,
          "description": "Debes reciclarno en los puntos limpios indicados en el mapa",
          "markers": [
          {label: "Punto 1", lat: 36.7666, lng: -4.40793 },
          {label: "Punto 2", lat: 35.555, lng: -4.40337 },
          ]
        },
         {
          "label": "ropa" ,
          "description": "Dónala a CUDECA, los puntos de donación son los indicados en el mapa",
          "markers": [
          {label: "Punto 1", lat: 36.7346, lng: -4.40793 },
          {label: "Punto 2", lat: 36.7366, lng: -4.40367 },
          ]
        },
         {
          "label": "pilas" ,
          "markers": [
          {label: "Punto 1", lat: 36.7346, lng: -4.40793 },
          {label: "Punto 2", lat: 36.7366, lng: -4.40367 },
          ]
        }
      ]
    }
  },
  created(){
    //get user's coordinates from browser request
    this.$getLocation({})
      .then(coordinates => {
        this.myCoordinates = coordinates;
      })

      .catch(error => alert(error))
  },
  mounted(){
    //add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => this.map = map);
  },
  methods: {
      handleDrag(){
        let center = {
          lat : this.map.getCenter().lat().toFixed(4),
          lng : this.map.getCenter().lng().toFixed(4)
        };

      },
      openCategoryMarkers(markers, description) {
        this.currentPois = markers
        this.currentDescription = description
      },

  },
  computed: {
    mapCoordinates(){
      if(!this.map){
        return {
          lat: 0,
          lng: 0
        };

      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
    }
  }
}
</script>
