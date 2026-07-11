import Welcome from './Welcome.vue';

export default {
  title: 'Welcome',
};

export const Usage = () => ({
  components: { Welcome },
  template: '<Welcome />',
});
