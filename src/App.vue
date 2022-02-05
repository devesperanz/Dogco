<template>
  <v-app>
    <div v-for="get in allTodos" :key="get.id">
      {{ get.title }}
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: mapGetters(["allTodos"]),
};
</script>
