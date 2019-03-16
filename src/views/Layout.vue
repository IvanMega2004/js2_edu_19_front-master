<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3>
          <navigation></navigation>
        </v-flex>
        <v-flex xs9>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "Layout",
  components: { Navigation }
};
</script>

<style>
body {
  font-family: sans-serif;
}

li {
  list-style: none;
}

.title,
h2,
h3 {
  color: blue;
  text-align: center;
}

.text {
  color: grey;
  margin-top: 10px;
}
</style>