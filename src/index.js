const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', 3000);

//middlewares
app.use(morgan('dev')); //Te permite ver los errores
                        //app.use(morgan('combined')); //Te permite ver mas información de los errores
                        //Ctr + C detiene el servidor
app.use(express.json());

//rutas
app.use(require('./routes/routes'));

//Empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");