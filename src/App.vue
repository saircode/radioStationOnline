<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import navLayaut from '@/layaut/nav.vue'
  components: {
    navLayaut
  }
</script>

<template>
  <navLayaut />
  <RouterView />
</template>