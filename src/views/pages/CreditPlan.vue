<template>
  <div class="page-container credit-plan mt-5">
    <AppHeader></AppHeader>
    //credit-plan
  </div>
</template>
<script>
import AppHeader from "@/views/layout/AppHeader"
export default {
  name:"PaymentSuccess",
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
