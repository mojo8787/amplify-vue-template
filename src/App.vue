<script setup lang="ts">
import Posts from './components/Posts.vue'
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <main>
    <Authenticator>
      <template v-slot="{ signOut }">
        <Posts />
        <button @click="signOut">Sign Out</button>
      </template>
    </Authenticator>
  </main>
</template>

