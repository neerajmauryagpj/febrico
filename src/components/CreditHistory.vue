<template>
  <div>
    <template v-for="n in 5">
      <v-layout :key="`layout${n}`" class="d-flex w-100 align-center">
        <v-flex sm6 md6 class="pr-4">
          <v-card class="pa-2" :elevation="1">
            <div class="accent--text">Fab cash silver</div>
            <div>
              <table width="100%">
                <tr>
                  <td class="py-1">Validity</td>
                  <td class="py-1 text-right">60days</td>
                </tr>
                <tr>
                  <td class="py-1">Credit</td>
                  <td class="py-1 text-right">₹600</td>
                </tr>
                <tr>
                  <td class="py-1">Benefits</td>
                  <td class="py-1 text-right">₹600</td>
                </tr>
              </table>
            </div>
          </v-card>
        </v-flex>
        <v-flex sm6 md6 class="pl-4 text-right">
          <div class="">Purchase Date</div>
          <div class="green--text">12/03/2023</div>
          <div class="mt-4">Expiry Date</div>
          <div class="red--text">12/03/2023</div>
        </v-flex>
      </v-layout>
      <v-divider :key="`divider${n}`" class="my-2"></v-divider>
    </template>
  </div>
</template>
<script>
export default {
  name: "CreditHistory",
};
</script>