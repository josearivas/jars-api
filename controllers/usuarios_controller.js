exports.getUsuarios = function(req, res) {		
	
	console.log("Entro por el metodo get del recuros usuarios");
	
	var db = require('../config/db');
	var query = 'SELECT * FROM usuario';
	
	db.connect(function(err) {
	  if (err) console.log('Error conectandose a la BD');
	  else console.log("Connected!");
	});

	db.query(query, function(err, result) {		
		
		if (err) console.log('Error ejecutando query');
		else res.json(result);	
	});						
}

exports.getUsuariosById = function(req, res) {		
	
	console.log("Entro por el metodo get del recuros usuarios por ID");
	
	var id = req.params.usuario_id;
	
	var db = require('../config/db');
	var query = 'SELECT * FROM usuario WHERE id = ' + id;
	
	db.connect(function(err) {
	  if (err) console.log('Error conectandose a la BD');
	  else console.log("Connected!");
	});

	db.query(query, function(err, result) {		
		
		if (err) console.log('Error ejecutando query');
		else res.json(result[0]);	
	});						
}