#!/usr/bin/env babel-node
// Load the full build. 
// var _ = require('lodash');

var helper = require('./helper')
var fs = require('fs').promise
var path = require('path')
let argv = require('yargs').argv
let prom = require('songbird') 

async function ls(dirPath) {
  let stat = await fs.promise.stat(dirPath)
  if (!stat.isDirectory()) return [dirPath]
  
  let promises = []
  let merged = []
  for (let name of await fs.promise.readdir(dirPath)) {
    // Run recursive ls in parallel
    if(argv.R) {
       let promise = ls(path.join(dirPath, name))
       promises.push(promise)
    } else {
      merged.push(path.join(dirPath, name))            
    }
  }
  
  if(argv.R) {
     // Wait for them in parallel
     let files = await prom.all(promises)
     merged = [].concat.apply([], files);
  }
  return merged
}

async function main() {
    // Call ls() and pass dir, remember to await
    let dir = process.argv[2] || __dirname
    console.log(await ls(dir))
}

// Replace ls() call with main()
main()

