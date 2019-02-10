#!/usr/bin/env node
const program = require('commander');

program
  .version('0.0.1')
  .option('-h, --help', 'This package is currently in development')
  .parse(process.argv);
