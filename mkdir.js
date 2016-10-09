#!/usr/bin/env babel-node

var helper = require('./helper')
var path = require('path')
let prom = require('songbird') 
var fs = require('fs').promise;

async function mkdir() {
  fs.mkdir(process.argv[2]).catch(e => console.log(e))
}

mkdir()
