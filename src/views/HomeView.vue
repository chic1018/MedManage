<template>
    <div class="home">
        <h1>Welcome to Hospital Management System</h1>
        <router-link to="/patients" class="nav-link">Patients</router-link>
        <router-link to="/doctors" class="nav-link">Doctors</router-link>
    </div>
</template>

<style scoped>
.home {
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
}

h1 {
    color: #4285f4;
}

.nav-link {
    margin: 10px;
    padding: 8px 16px;
    background-color: #4285f4;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
}

.nav-link:hover {
    background-color: #2a65c7;
}
</style>

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script> -->
