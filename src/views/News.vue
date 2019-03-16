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
  </div>
</template>

<script>
  

  export default {
    name: "News",
    data: () => ({
      news: [{
        title: "IRISH WEEK Неделя Ирландии 13-24 марта 2019",
        text: "IRISH WEEK - самый масштабный фестиваль ирландской культуры в России. Кино, концерты, театр, танцы, детская программа и многое другое - гостей ждет все самое интересное с изумрудного острова! Окунитесь вместе с нами в атмосферу ирландского праздника!",
        img: ""
      },
      {
        title: "Duolingo предлагает пройти курс валирийского языка из «Игры престолов»",
        text: "Популярный сервис изучения языков Duolingo предлагает обновить свои знания высокого валирийского — родного языка Дейенерис Таргариен - перед выходом 8 сезона Игры Престолов, которая состоится 14 апреля 2019 года на канале HBO. Курс впервые появился на сайте Duolingo в день премьеры седьмого сезона «Игры престолов». Изучение строится на базе английского, от простейших слов — к предложениям, как и в других курсах на сайте.",
        img: ""
      }
      
      ]
    })
    
  }
</script>
