<template>
  <v-app>
    <Header v-if="false"></Header>
    <v-main class="main-content">
        <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import Header from  "@/views/layout/Header"
export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>