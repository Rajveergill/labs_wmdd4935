let net = require('net');

function t (i) {
      return (i < 10 ? '0' : '') + i
    }

function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        t(d.getMonth() + 1) + '-' +
        t(d.getDate()) + ' ' +
        t(d.getHours()) + ':' +
        t(d.getMinutes())
    }

let server = net.createServer(function(socket) {
    let date = new Date();
    socket.end(now(date) + '\n');
});

server.listen(Number(process.argv[2]));