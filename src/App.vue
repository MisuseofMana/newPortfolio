<template>
  <v-app>
    <v-main class="background-container">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-container>
      <v-footer>
        <v-row>
          <v-col cols="12" align="right">
            <a href="https://www.instagram.com/misuseofmana/" target="_blank">
              @misuseofmana
            </a>
            <p class="text-body-1">
              &copy; Sean Yager, {{ new Date().getFullYear() }}, all rights reserved.
            </p>
          </v-col>
        </v-row>  
      </v-footer>
    </v-container>
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
