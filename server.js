var app = require('./app.js');
var port = 3000;

app.listen(port, function(){
	console.log('Servidor activo por el puerto: ' + port);
})