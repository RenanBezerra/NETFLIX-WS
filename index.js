const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/dataBase');
const cors = require('cors');
const app = express();

const filmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');
const episodeosRoutes =require('./src/routes/episodeos.routes')

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/episodeo', episodeosRoutes);


app.listen(3000, () => {
    console.log('Meu servidor está funcionando ')
});