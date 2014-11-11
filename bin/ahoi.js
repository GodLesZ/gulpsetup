#!/usr/bin/env node
"use strict";

var inquirer    = require("inquirer");
var program     = require('commander');
var poster      = require('../utils/poster')
var spawn       = require('child_process').spawn;

var _setup      = require('../lib/setup');
var generator      = require('../lib/generator');

var prg = function(){
  program
  .version('0.0.1')
  .option('-d, --develop', 'Start Development Envoriment')
  // .option('-b, --build', 'build App')
  // .option('-n, --new', 'create new App')
  // .option('-g, --generator', 'choose + run a generator')
  .parse(process.argv);

  console.log( program )  ;
  if (program.develop) console.log('  - develop');
  if (program.build) console.log('  - build');
  if (program.new) console.log('  - new');
  if (program.generator) generator.init();

}


var guided = function(){
  var _choices = [
    "Start Development",
    "Build App",
    new inquirer.Separator(),
    "Setup new App",
    "Quit",
  ];

  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: _choices
    }
  ], function( answers ) {

      switch (answers.choice) {
      case 'Setup new App':
        _setup.init();
        break;
      case 'Quit':
        break;
      default:
        //console.log('default')
      }
  });
}

prg();
