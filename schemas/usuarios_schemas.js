var UsuariosSchema = {
    type: 'object',
    properties: {
        number: {
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        }
    }
};

module.exports = UsuariosSchema