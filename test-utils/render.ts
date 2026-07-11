import { MantineProvider } from '@mantine-vue/core';
import { render as testingLibraryRender } from '@testing-library/vue';
import { h, type Component } from 'vue';
import { theme } from '../src/theme';

export function render(ui: Component) {
  return testingLibraryRender(MantineProvider, {
    props: { theme, env: 'test' },
    slots: { default: () => h(ui) },
  });
}
