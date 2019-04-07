#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');

const program = require('commander');
const pkg = require('../package');

program
  .version(pkg.version)
  .command('init [type]')
  .description('run setup commands for all envs')
  .action(function(type){
    require('../lib/init')(type);
  });

console.log(process.argv,'==process.argv');

program.parse(process.argv);


if (!program.args.length) program.help();
