#!/usr/bin/env node

import commander from 'commander';
import { version } from '../../package.json';
import calcLinen from '..';

const processAction = (inputPath) => {
  console.log(calcLinen(inputPath));
};

commander
  .description('Calculates the cutting of a set of bed linen.')
  .version(version)
  .arguments('<input_file>')
  .action(processAction)
  .parse(process.argv);

if (commander.args.length === 0) {
  commander.help();
}
