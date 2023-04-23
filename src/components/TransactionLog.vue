<template>
<div>
   <table class="text-center" width="100%">
          <tr>
            <th class="pa-1">Amount</th>
            <th class="pa-1">Date</th>
            <th class="pa-1">Status</th>
          </tr>
          <tr>
            <td class="pa-1">₹2000</td>
            <td class="pa-1">03/03/2023</td>
            <td class="pa-1"><span class="green--text">Success</span></td>
          </tr>
          <tr>
            <td class="pa-1">₹2000</td>
            <td class="pa-1">03/03/2023</td>
            <td class="pa-1"><span class="red--text">Uses</span></td>
          </tr>
        </table>
</div>
</template>
<script>
export default {
    name:"TransactionLog",
}
</script>