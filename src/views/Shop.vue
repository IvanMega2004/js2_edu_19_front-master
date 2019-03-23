<template>
  <div>
   <h2>Магазин</h2> 
   <div v-for="product in products" :key="product.id">{{product.title}} - {{ product.price}}
      <v-btn @click="buyProduct = chat.id">Купить</v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";  

  export default {
    name: "Shop",
    computed: {
    ...mapState ({
      products: state => state.product.product
    })
    },
    methods: mapActions("", "buyProduct"),
    created () {
      this.$store.dispatch("функция купить из модуля shop", product);
    }
    
  }
</script>
