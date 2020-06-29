<template>
  <div id="app">

    <Navbar :menu="menu" />

      <nuxt />

    <MainFooter />

  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import MainFooter from "@/components/MainFooter"

export default {
  name: "App",
  data(){
    return {
      menu: [
        {id: 1, path: "/", name: "Home"},
        {id: 2, path: "/login", name: "login"},
        {id: 3, path: "/register", name: "register"},
        {id: 4, path: "/greenMarket", name: "greenMarket"}
        // {id: 5, path: "/myProfile", name: "profile"}
      ]
    }
  },
  components: {
    Navbar,
    MainFooter
  },

};
</script>
