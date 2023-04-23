<template>
  <div class="page-container payment-information">
    <div class="px-4">
      <AppHeader></AppHeader>
    </div>
    <div class="px-4">
      <div style="font-weight:600">
        Payment & Information
      </div>
      <div class="mt-3">
        <v-row>
          <v-col cols="12" sm="12" class="py-2">
            <v-text-field
              outlined
              hide-details
              dense
              placeholder="Full Name"
              v-model="form.full_name"
            ></v-text-field>
          </v-col>
          <v-col cols="8" sm="8" class="py-2">
            <v-text-field
              outlined
              hide-details
              dense
              placeholder="Mobile"
              v-model="form.mobile"
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4" class="py-2">
            <v-text-field
              outlined
              hide-details
              dense
              placeholder="Otp"
              v-model="form.otp"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" class="py-2">
            <v-text-field
              outlined
              hide-details
              dense
              placeholder="City"
              v-model="form.city"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" class="py-2">
            <v-text-field
              outlined
              hide-details
              dense
              placeholder="Email"
              v-model="form.email"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="my-4" style="font-weight:600">
          Select Payment 
        </div>
        <div class="">
          <v-radio-group v-model="form.payments">
            <v-radio
              value="rozorpay"
            >
              <template v-slot:label>
                RozorPay
              </template>
            </v-radio>
            <v-radio
              value="paytm"
            >
            <template v-slot:label>
                Paytm
              </template>
            </v-radio>
            <v-radio
              value="paypal"
            >
              <template v-slot:label>
                Paypal
              </template>
            </v-radio>
          </v-radio-group>
        </div>
        <div class="d-flex">
           <v-btn
            color="green white--text"
            class="flex"
            @click="payment()"
          >
            ₹2000
          </v-btn>
        </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/views/layout/AppHeader"
export default {
  name:"PaymentInformation",
  data(){
    return{
      form:{
        full_name:null,
        mobile:null,
        otp:null,
        city:null,
        email:null,
        payments:"rozorpay",
      },
    }
  },
  methods:{
    payment(){
      this.$router.push({name:'payment-success'})
    }
  },
  components:{
    AppHeader
  }
}
</script>
