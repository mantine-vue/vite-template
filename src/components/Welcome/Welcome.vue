<script setup lang="ts">
import { Anchor, Text, Title } from '@mantine-vue/core';
import classes from './Welcome.module.css';
</script>

<template>
  <Title :class="classes.title" ta="center" :mt="100">
    Welcome to
    <Text
      inherit
      variant="gradient"
      component="span"
      :gradient="{ from: 'pink', to: 'yellow' }"
    >
      Mantine
    </Text>
  </Title>
  <Text c="dimmed" ta="center" size="lg" :maw="580" mx="auto" mt="xl">
    This starter Vite project includes a minimal setup, if you want to learn more on Mantine Vue +
    Vite integration follow
    <Anchor href="https://mantine-vue.dev/guides/vite/" size="lg">this guide</Anchor>. To get
    started edit pages/Home.page.vue file.
  </Text>
</template>
