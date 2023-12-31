import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import * as url from 'url';
import buildJsCore from './build-js-core.js';
import buildJsBundle from './build-js-bundle.js';
import buildTypes from './build-types.js';
import buildStyles from './build-styles.js';
import buildReact from './build-react.js';
import buildElement from './build-element.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
console.log(chalk.cyan('Watching file changes ...'));
const watchFunction = async (fileName) => {
  if (fileName.includes('.less') || fileName.includes('.css') || fileName.includes('.scss')) {
    console.log('Building styles');
    await buildStyles();
    await buildElement();
    console.log('Building styles DONE');
    return;
  }
  if (fileName.includes('.d.ts')) {
    console.log('Building Types');
    await buildTypes();
    return;
  }
  if (fileName.includes('react')) {
    console.log('Building React');
    buildReact('build');
    return;
  }
  if (fileName.includes('element')) {
    console.log('Building Element');
    buildElement('build');
    return;
  }

  if (fileName.includes('.js')) {
    console.log('Building JS');
    await buildJsCore();
    await buildJsBundle();
    await buildElement('build');
    return;
  }
  console.log('something wrong...');
};
let watchTimeout;
fs.watch(path.resolve(__dirname, '../src'), { recursive: true }, (eventType, fileName) => {
  clearTimeout(watchTimeout);
  watchTimeout = setTimeout(() => {
    watchFunction(fileName);
  }, 100);
});
