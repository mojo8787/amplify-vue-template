<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import Posts from './components/Posts.vue';
</script>

<template>
  <main>
    <authenticator>
      <template v-slot="{ user, signOut }">
        <div class="header">
          <h1>Hello {{ user?.username }}'s Posts</h1>
          <button @click="signOut">Sign Out</button>
        </div>
        <Posts />
      </template>
    </authenticator>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>

