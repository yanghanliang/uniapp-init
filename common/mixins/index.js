const mixins = {};
const requireMixin = require.context('./', false, /\.js$/);
requireMixin.keys().forEach((filename) => {
  const name = filename.replace(/.\/|.js/g, '');
  if (name !== 'index') {
    mixins[name] = requireMixin(filename).default;
  }
});

export default {
  mixins: [...Object.values(mixins)],
};
