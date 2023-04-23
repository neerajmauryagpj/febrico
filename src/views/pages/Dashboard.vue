<template>
  <div class="page-container dashboard mt-5">
    <div class="px-3">
      Dashboard
    </div>
    <div class="d-flex flex-wrap py-2">
      <router-link to="/history" class="flex col-6  menu-link">
        <div class="accent white--text text-center pa-5">
          History
        </div>
      </router-link>
      <router-link to="/credit-plan" class="flex col-6  menu-link">
        <div class="accent white--text text-center pa-5">
          credit plan
        </div>
      </router-link>
      <router-link to="/payment" class="flex col-6  menu-link">
        <div class="accent white--text text-center pa-5">
          Payment Information
        </div>
      </router-link>
      <router-link to="/payment-success" class="flex col-6  menu-link">
        <div class="accent white--text text-center pa-5">
          Payment success
        </div>
      </router-link>
    </div>
  </div>
</template>
