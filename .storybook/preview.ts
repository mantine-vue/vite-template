import '@mantine-vue/core/styles.css';
import { MantineProvider } from '@mantine-vue/core';
import { h } from 'vue';
import { theme } from '../src/theme';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    // @ts-expect-error – storybook throws build error for (a: any, b: any)
    storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }),
  },
  backgrounds: { disable: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (story: () => unknown, context: { globals: { theme?: 'light' | 'dark' } }) => {
    const scheme = context.globals.theme || 'light';
    return () =>
      h(MantineProvider, { theme, forceColorScheme: scheme }, () => h(story() as never));
  },
];
