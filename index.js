#!/usr/bin/env node

'use strict'

// Importing depedencies
const program = require('commander');
const shell = require('shelljs');
const fs = require('fs');
const { PythonShell } = require('python-shell');
const showBanner = require('./utils/banner');
const exercises = require('./workspace/config');

// Linking excercise files
let initialize = require('./lib/initializeTasks');
let fetchTask = require('./lib/fetchTask');
let submitTask = require('./lib/submitTask');
let showKeys = require('./lib/showKeys');

program
.command('init')
.action(initialize);

program
.command('submit <filename>')
.action(submitTask);

program
.command('fetchtask <key>')
.action(fetchTask);

program.command('keys')
.action(showKeys);

program.parse(process.argv);
