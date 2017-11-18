const path = require('path');

module.exports = ({ platform, root }, defaults) => ({
  entry: `./src/mobile/index.js`,
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      shared: path.join(root, 'src/shared'),
      components: path.join(root, 'src/shared/components')
    }
  }
});
