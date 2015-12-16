var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('SocketServer');
});

// setInterval(function() {
//     io.sockets.emit('chat message', 'hallo von Server');
//   }, 2 * 1000);

io.on('connection', function(socket){
  console.log('a user connected');
  console.log(socket.id);

  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

http.listen(3333, function(){
  console.log('listening on *:3333');
});