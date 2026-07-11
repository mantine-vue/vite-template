<script setup lang="ts">
import { Button, Group, useMantineColorScheme } from '@mantine-vue/core';

const { setColorScheme } = useMantineColorScheme();
</script>

<template>
  <Group justify="center" mt="xl">
    <Button @click="setColorScheme('light')">Light</Button>
    <Button @click="setColorScheme('dark')">Dark</Button>
    <Button @click="setColorScheme('auto')">Auto</Button>
  </Group>
</template>
