#!/usr/bin/env babel-node

var helper = require('./helper')
var path = require('path')
let prom = require('songbird') 
var fs = require('fs').promise;

async function touch() {
  fs.utimes(process.argv[2], NaN, NaN).catch(e => console.log(e))
}
touch()
