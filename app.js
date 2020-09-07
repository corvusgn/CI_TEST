//==============================================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const app = express();
const server = require('http').Server(app);
const env	= process.env.NODE_ENV || '';
require('dotenv').config({path: __dirname + '/.env' + (env ? '.' + env : '')});


//Variables
//==============================================================================
const port = process.env.PORT;
const envName = process.env.NAME;

//Configuracion
//==============================================================================
app.use(express.static(`${__dirname}/public`));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/service',(req, res) => {
    res.send({env: envName, response: 'cambio11 --- ' + new Date().getTime()});
})


//Start
//==============================================================================
server.listen(port, function() {
    console.log(envName,'---- Servidor corriendo en el puerto ' + port);
});
