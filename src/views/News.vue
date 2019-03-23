<template>
  <div>
   <h2>Новости</h2> 
   <v-card v-for="(item, key) in news" :key="key" style="margin: 15px">
        <v-img
          :src="item.img"
          
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div class="text"> {{ item.text }} </div>
            
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-btn flat @click="addItem">Добавить новость</v-btn>
  </div>
</template>

<script>
  import {mapState, mapActions} from "vuex";

  export default {
    name: "News",
    data: () => ({}),
    computed: {

      ...mapState({
        news: state => state.news.news
      })
    },
    methods: {
      ...mapActions(["addNews"]),

      addItem() {
        let item = {
          title: "Сделано с любовью",
          text: "Vuex прекрасен",
          img: ""
        };
        this.addNews(item);
      }
    }
    
  };
</script>
