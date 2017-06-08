// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Routes
var usuarios = require('./routes/usuarios');

var error =  require('./error_validations');

var app = express();

app.use(bodyParser.json());
app.use('/jars/api/v1', usuarios);

app.use(error.errorValidations);


module.exports = app