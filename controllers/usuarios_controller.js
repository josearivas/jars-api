exports.getUsuarios = function(req, res) {		
	
	console.log("--- Get Usuarios ---");
	
	var db = require('../config/db');
	var query = 'SELECT id, firstname, lastname ' +
				'FROM usuario';

	db.query(query, function(err, result) {		
		
		if (err) {
			console.log(err);
			res.status(500).json({ status:500, message:'Internal Server Error', error: err.code });
			//throw err;
		}	
		else res.json(result);	
	});			
}

exports.getUsuarioById = function(req, res) {		
	
	console.log("--- Get Usuarios By Id ---");
	
	var id = req.params.usuario_id;
	
	var db = require('../config/db');
	var query = 'SELECT id, firstname, lastname ' + 
				'FROM usuario ' +
				'WHERE id = ' + id;							

	db.query(query, function(err, result) {		
	
		if (err) {
			console.log(err);
			res.status(500).json({ status:500, message:'Internal Server Error', error: err.code });
			//throw err;
		}	
		else res.json(result[0]);	
	});						
}

exports.createUsuario = function(req, res) {		
	
	console.log("--- Create Usuario ---");
	console.log("REQUEST: " + JSON.stringify(req.body));
		
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;			
	
	var db = require('../config/db');
	var query = 'INSERT INTO usuario (firstname, lastname) ' + 
				'VALUES("' + firstName + '", "' + lastName + '")';				

	db.query(query, function(err, result) {		
	
		if (err) {
			console.log(err);
			res.status(500).json({ status:500, message:'Internal Server Error', error: err.code });
			//throw err;
		}	
		else res.status(201).json({ id:result.insertId });	
	});						
}

exports.updateUsuarioById = function(req, res) {		
	
	console.log("--- Create Usuario ---");
	console.log("REQUEST: " + JSON.stringify(req.body));
		
	var id = req.params.usuario_id;	
	var firstName = req.body.firstName || "";
	var lastName = req.body.lastName || "";		
	
	var db = require('../config/db');
	var query = 'UPDATE usuario ' +
				'SET firstname="' + firstName + '", lastname="' + lastName + '" ' +
				'WHERE id=' + id;
				
	console.log(query);						

	db.query(query, function(err, result) {		
	
		if (err) {
			console.log(err);
			res.status(500).json({ status:500, message:'Internal Server Error', error: err.code });
			//throw err;
		}	
		else res.json(result);	
	});						
}

exports.updatePartialUsuarioById = function(req, res) {		
	
	console.log("--- Partially Update Usuario ---");
	console.log("REQUEST: " + JSON.stringify(req.body));
		
	var id = req.params.usuario_id;	
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	
	var db = require('../config/db');
	var util = require('../util/util');	
	
	var query = 'UPDATE usuario ' +
				'SET firstname=' + util.setColumnValue(firstName, 'firstname') + ', ' +
					'lastname=' + util.setColumnValue(lastName, 'lastname') + ' ' +
				'WHERE id=' + id;
				
	console.log(query);						

	db.query(query, function(err, result) {		
	
		if (err) {
			console.log(err);
			res.status(500).json({ status:500, message:'Internal Server Error', error: err.code });
			//throw err;
		}	
		else res.json(result);	
	});						
}

exports.deleteUsuarioById = function(req, res) {		
	
	console.log("--- DELETE Usuarios By Id ---");
	
	var id = req.params.usuario_id;
	
	var db = require('../config/db');	
	var query = 'DELETE FROM usuario ' + 				
				'WHERE id = ' + id;								
				
	db.query(query, function(err, result) {		
	
		if (err) {
			console.log(err);
			res.status(500).json({ status:500, message:'Internal Server Error', error: err.code });
			//throw err;
		}	
		else 			
			res.json({ message: 'Usuario eliminado exitosamente' });
	});						
}