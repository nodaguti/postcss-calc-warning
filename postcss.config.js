const importPlugin = require('postcss-import');
const calc = require('postcss-calc');

module.exports = () => ({
  plugins: [
    importPlugin(),
    calc({
      warnWhenCannotResolve: true,
    }),
  ],
});
