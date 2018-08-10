const path = require('path');
const childProcess = require('child_process');

const NPM_CLI_DIR = path.resolve(__dirname, './node_modules/.bin');

const postcss = path.resolve(NPM_CLI_DIR, './postcss');
const input = path.resolve(__dirname, './index.css');
const config = path.resolve(__dirname, './postcss.config.js');
const output = path.resolve(__dirname, './dist');

const args = [
  input,
  '--config', config,
  '--dir', output,
];

childProcess.spawn(postcss, args, {
  cwd: process.cwd(),
  env: process.env,
  stdio: 'inherit',
});
