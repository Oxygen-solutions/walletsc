#!/usr/bin/env node
var argv = process.argv.slice(2);
var logger = require('semafor')();
if(argv.indexOf("--help") != -1) {
  console.log([
    "Usage; ",
    " rename_files <relative_dir> <pattern_to_replace> [replace_with_string] [--verbose]"
    ].join("\n"))
  process.exit(0)
}
var rename = require('./index.js');
var result = rename({dir:argv[0], pattern:argv[1], replace:argv[2], verbose:(argv[3] && argv[3] == "--verbose"? true : false)});
var err = result[0];
if(err) return logger.fail(err.toString());
logger.ok("Files renamed!");
var list = result[1];
console.log(list);
