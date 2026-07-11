<script setup lang="ts">
import '@mantine-vue/core/styles.css';
import { MantineProvider } from '@mantine-vue/core';
import { RouterView } from 'vue-router';
import { theme } from './theme';
</script>

<template>
  <MantineProvider :theme="theme">
    <RouterView />
  </MantineProvider>
</template>
