var UsuariosSchema = {
    type: 'object',
    properties: {
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true
        }		
    }
};

module.exports = UsuariosSchema