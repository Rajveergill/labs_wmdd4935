let Module = require('./program-module.js');
let dir= process.argv[2];
let filterStr =  process.argv[3];

Module(dir, filterStr, function(err, list) {
   if (err) {
        return console.error('There was an error:', err)
      }
    list.forEach(function (file) {
        console.log(file);
    });
});