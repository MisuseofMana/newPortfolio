<template>
  <v-app>
    <v-main class="background-container">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>

<style scoped>
.background-container {
  background-image: url('@/assets/design/background.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
</style>
