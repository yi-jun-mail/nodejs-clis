#!/usr/bin/env babel-node

var helper = require('./helper')
var path = require('path')
let prom = require('songbird') 
var fs = require('fs').promise;

async function cat() {
   for(var i=2; i< process.argv.length; i++) {
       var contents = await fs.readFile(process.argv[i], 'utf8')
       console.log(contents)
   }
}
cat()

 
