#!/usr/bin/env babel-node

var helper = require('./helper')
var path = require('path')
let prom = require('songbird') 
let fs = require('fs');
let argv = require('yargs').argv
let readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream(process.argv[3]),
    output: process.stdout,
    terminal: false
});

//I use the callback style for this utility, I did not use promise/await, however, 
//I use await in other utilities. I want to try all kinds of styles, please do not ask me to change it
//by the way, this util is a bonus problem
var re = new RegExp(process.argv[2]);
var linenum = 1
rd.on('line', function(line) {
    if(re.test(line)) {
       console.log(linenum + ": " +line);
    }
    linenum++
});

