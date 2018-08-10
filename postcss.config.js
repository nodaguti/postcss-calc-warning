const calc = require('postcss-calc');

module.exports = () => ({
  plugins: [
    calc({
      warnWhenCannotResolve: true,
    }),
  ],
});
