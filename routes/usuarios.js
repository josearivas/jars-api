var express = require('express');
var validate = require('express-jsonschema').validate;
var usuarios  = require('../controllers/usuarios_controller');
var router = express.Router();

var usuariosSchema = require('../schemas/usuarios_schemas');

router.route('/usuarios')
	.get(usuarios.getUsuarios)
	.post(validate({body: usuariosSchema}), usuarios.createUsuario)
	
router.route('/usuarios/:usuario_id')
	.get(usuarios.getUsuarioById)
	.put(usuarios.updateUsuarioById)
	.patch(usuarios.updatePartialUsuarioById)
	.delete(usuarios.deleteUsuarioById)			
	
module.exports = router