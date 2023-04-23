<template>
  <v-layout class="py-2">
    <v-spacer></v-spacer>
    <v-btn
      fab
      small
      color=""
      class="ml-3"
      depressed
      @click="$router.push('/dashboard')"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-layout>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>