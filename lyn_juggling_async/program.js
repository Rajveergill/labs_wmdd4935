 let http = require('http')
    let bl = require('bl')
    let final = []
    let count = 0
    
    function printResponses () {
      for (var i = 0; i < 3; i++) {
        console.log (final[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          final[index] = data.toString()
          count++
    
          if (count === 3) {
            printResponses()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }