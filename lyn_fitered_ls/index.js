let fs = require('fs')
    let path = require('path')
    
    let directory = process.argv[2]
    
    
    fs.readdir(directory, function (err, files) {
      if (err) 
      {
        return console.error(err)
        
      }
      files.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3]) {
          console.log(file)
        }
      })
    })