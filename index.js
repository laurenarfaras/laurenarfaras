var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/html5up-stellar'));

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/html5up-stellar'});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
