const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); // app es la encargada de tener toda la funcionalidad del servidor


const { mongoose } = require('./database');

// Settings
//utiliza el puerto que te da el servicio de la nube - si existe un puerto dado por el sistema operativo tomalo osino toma el puerto 3000
app.set('port', process.env.PORT || 3000);

//milddlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/employees', require('./routes/employee.routes'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);

});