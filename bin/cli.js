#!/usr/bin/env node
const chalk = require('chalk');
const program = require('commander');
const pkg = require('../package');

program
  .version(pkg.version)
  .command('init [type]')
  .description('Init React or Vue project!')
  .action(function (type) {
    require('../lib/init')(type);
  });

program.parse(process.argv);

if (!program.args.length) program.help();
