let fs = require('fs');
let r = process.argv[2];

fs.readFile(r, function (err, cnt) {
      if (err) {
        return console.log(err)
      }

      let buf = cnt.toString()
      let result = buf.split('\n')
      
      console.log(result.length - 1);
    })  
    
    
    
    