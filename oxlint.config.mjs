import { defineConfig } from 'oxlint';
import { oxlint } from 'oxc-config-mantine';

export default defineConfig({
  ...oxlint,
  plugins: [...(oxlint.plugins ?? []), 'vue'],
  ignorePatterns: ['**/*.{mjs,cjs,js,d.ts,d.mts}', 'dist', 'storybook-static'],
});
