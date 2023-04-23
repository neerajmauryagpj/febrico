<template>
  <div class="page-container history">
    <div class="accent px-4">
       <AppHeader></AppHeader>
        <v-layout class="py-8 white--text align-center">
          <div>
            <div style="font-size:24px;font-weight:600">Fab Credit</div>
            <div class="my-0" style="font-size:55px;font-weight:600">₹2500</div>
          </div>
          <v-spacer></v-spacer>
          <v-btn 
            small
            color="accent"
            class="py-5"
            @click="$router.push('/dashboard')"
          >
            <v-icon left>mdi-basket-fill</v-icon> Refill
          </v-btn>
        </v-layout>
        <v-layout class="pb-15 flex-wrap">
          <v-flex sm4 md4 class="pa-2">
            <HistoryCard
              title="Available Credit"
              value="₹2000"
              icon="mdi-hand-heart-outline"
              value-color="green--text"
            ></HistoryCard>
          </v-flex>
          <v-flex sm4 md4 class="pa-2">
            <HistoryCard
              title="Purchase Date"
              value="10/03/2023"
              icon="mdi-calendar-check-outline"
              value-color="accent--text"
            ></HistoryCard>
          </v-flex>
          <v-flex sm4 md4 class="pa-2">
            <HistoryCard
              title="Expiry Date"
              value="10/03/2023"
              icon="mdi-calendar"
              value-color="red--text"
            ></HistoryCard>
          </v-flex>
        </v-layout>
        <div class="py-5"></div>
    </div>
    <div class="botton-lisiitng mt-n8 white">
      <v-layout class="flex-wrap grey lighten-2 justify-space-between pa-1" style="border-radius:8px;position: relative;top: -22px;" >
          <div  
            class="h-btn flex py-2 px-4 text-center cursor-pointer"
            :class="currentTab == 'TransactionLog' ? 'active' : ''"
            @click="currentTab = 'TransactionLog'"  
          >Transaction log</div>
          <div 
            class="h-btn flex py-2 px-4 text-center cursor-pointer"
            :class="currentTab == 'CreditHistory' ? 'active' : ''"
            @click="currentTab = 'CreditHistory'" 
          >Credit history</div>
          <div 
            class="h-btn flex py-2 px-4 text-center cursor-pointer"
            :class="currentTab == 'UsesHistory' ? 'active' : ''"
            @click="currentTab = 'UsesHistory'" 
          >Uses History</div>
      </v-layout>
      <div :class="currentTab">
        <component :is="currentTab"></component>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/views/layout/AppHeader"
import HistoryCard from "@/components/HistoryCard"
import CreditHistory from "@/components/CreditHistory"
import UsesHistory from "@/components/UsesHistory"
import TransactionLog from "@/components/TransactionLog"
export default {
  name:"historyPage",
  data(){
    return{
      currentTab:"TransactionLog",
    }
  },
  components:{
    HistoryCard,
    CreditHistory,
    UsesHistory,
    TransactionLog,
    AppHeader,
  }
}
</script>
<style>
.botton-lisiitng{
  border-radius: 30px;
  min-height: 300px;
  padding: 46px;
  padding-top:0
}
.h-btn.active{
  background: #fff;
  border-radius: 8px;
  
}
</style>