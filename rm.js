#!/usr/bin/env babel-node

var helper = require('./helper')
var path = require('path')
let prom = require('songbird') 
let fs = require('fs').promise;
let argv = require('yargs').argv

//I use the asyn+lamda style for the exercise
async function rm(dir) {
  fs.promise.stat(dir).then(function(stat) { 
  if (stat.isDirectory()) {
     fs.rmdir(dir).catch(e => console.log(e))
  } else {
     fs.unlink(dir).catch(e => console.log(e))
  }}).catch(e => console.log(e)) 
}

rm(process.argv[process.argv.length-1])


