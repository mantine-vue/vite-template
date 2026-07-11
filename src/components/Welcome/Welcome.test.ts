import { render, screen } from '@test-utils';
import Welcome from './Welcome.vue';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(Welcome);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine-vue.dev/guides/vite/'
    );
  });
});
