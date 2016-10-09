#!/usr/bin/env babel-node

var helper = require('./helper')
async function echo() {
   for(var i=2; i < process.argv.length; i++) {
      process.stdout.write(process.argv[i] + " ")
   }
   process.stdout.write("\n")
}
echo()
