const http = require('http');
const fs = require('fs');


let port = Number(process.argv[2]);

let server = http.createServer(function (req, res) {

    res.writeHead(200, {'content-type': 'text/plain'})

    let fsStream = fs.createReadStream(process.argv[3]);
    fsStream.pipe(res);
});

server.listen(port);