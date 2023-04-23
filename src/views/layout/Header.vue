<template>
    <v-app-bar app light flat>
      <v-toolbar-title>
        <img src="images/logo.png" class="header-logo"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="header-menu">
          <router-link to="/" class="menu-link">
              Dahboard
          </router-link>
          <router-link to="/history" class="menu-link">
              History
          </router-link>
          <router-link to="/credit-plan" class="menu-link">
              credit plan
          </router-link>
          <router-link to="/payment" class="menu-link">
              Payment Information
          </router-link>
          <router-link to="/payment-success" class="menu-link">
              Payment success
          </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn 
        fab
        small
        color="grey lighten-2"
        class="ml-3"
        depressed
        @click="$router.push('/dashboard')"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{
            counter:5,
      }
    }
}
</script>