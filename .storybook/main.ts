import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-themes'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
};

export default config;
