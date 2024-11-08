<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import Posts from './components/Posts.vue';
import BookingCalendar from './components/BookingCalendar.vue';
import { ref } from 'vue';

const activeTab = ref('posts');
</script>

<template>
  <main>
    <authenticator>
      <template v-slot="{ user, signOut }">
        <div class="header">
          <h1>Welcome {{ user?.username }}</h1>
          <button @click="signOut">Sign Out</button>
        </div>
        <div class="tabs">
          <button class="tab-button" @click="activeTab = 'posts'">Posts</button>
          <button class="tab-button" @click="activeTab = 'bookings'">Bookings</button>
        </div>
        <Posts v-if="activeTab === 'posts'" />
        <BookingCalendar v-if="activeTab === 'bookings'" />
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
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tabs {
  display: flex;
  gap: 10px;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
}

.tab-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #f3f4f6;
  cursor: pointer;
  transition: background-color 0.2s;
}

.tab-button:hover {
  background-color: #e5e7eb;
}

.tab-button.active {
  background-color: #2563eb;
  color: white;
}
</style>

