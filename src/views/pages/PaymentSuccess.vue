<template>
  <div class="page-container payment-success">
    <div class="px-4">
      <AppHeader></AppHeader>
    </div>
    <div class="px-4">
      <div class="py-15 text-center">
          <v-icon size="120" color="green">
            mdi-check-circle
          </v-icon>
      </div>
      <div class="text-h5 mb-3 green--text text-center" style="font-weight:600">
        Payment Successfully Done!
      </div>
      <v-divider></v-divider>
      <div class="accent--text text-center mt-3">
        Order Id : #FEB00034
      </div>
      <div class="mt-8 py-3">
        <v-row>
          <v-col cols="6" class="py-4">
            Credit Amount
          </v-col>
          <v-col cols="6" class="py-4 text-right" style="font-weight:600">
            ₹2000
          </v-col>
          <v-col cols="12" class="py-0">
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="py-4">
            Benifit Amount
          </v-col>
          <v-col cols="6" class="py-4 text-right" style="font-weight:600">
            ₹2500
          </v-col>
          <v-col cols="12" class="py-0">
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="py-4">
            Expiry Date
          </v-col>
          <v-col cols="6" class="py-4 text-right" style="font-weight:600">
            03/03/2023
          </v-col>
          <v-col cols="12" class="py-0">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </div>
      <div class="text-center mt-10">
           <v-btn
            color="accent white--text"
            class="mx-auto"
            @click="goDashboard()"
          >
            Go to dashboard
          </v-btn>
        </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/views/layout/AppHeader"
export default {
  name:"PaymentSuccess",
  data(){
    return{
      
    }
  },
  methods:{
    goDashboard(){
      this.$router.push({name:"dashboard"})
    }
  },
  components:{
    AppHeader
  }
}
</script>

