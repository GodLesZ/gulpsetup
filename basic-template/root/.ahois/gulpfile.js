var requireDir  = require('require-dir');
var fs          = require('fs');
var appDir      = process.cwd();
var Pathsen     = "YAMPS"
// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });
