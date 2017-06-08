var express = require('express');
var validate = require('express-jsonschema').validate;
var usuarios  = require('../controllers/usuarios_controller');
var router = express.Router();

var usuariosSchema = require('../schemas/usuarios_schemas');

router.route('/usuarios')

	.get(usuarios.getUsuarios)
	
	.post(validate({body: usuariosSchema}), function(req, res) {
		console.log("Metodo POST");
		console.log("BODY: " + JSON.stringify(req.body));
		res.json({ mensaje: 'Operacion con post realizada' });
	})
	
router.route('/usuarios/:usuario_id')

	.get(usuarios.getUsuariosById)	
	

module.exports = router