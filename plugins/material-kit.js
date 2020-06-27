import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/static/scss/material-kit.scss";
import "@/static/css/demo.css";
import globalDirectives from "./globalDirectives";
import globalMixins from "./globalMixins";
import VueLazyload from "vue-lazyload";
import  DropDown  from "@/components/DropDown";
import  Parallax  from "@/components/Parallax";
import  VPopover  from "v-tooltip";


export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(globalComponents);
    Vue.use(DropDown)
    Vue.use(Parallax)
    Vue.use(VPopover)
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: "0px",
        threshold: 0.1
      }
    });
  }
};
