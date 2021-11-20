const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Conexion DB
mongoose.connect('mongodb://localhost/report',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

//Rutas importadas
const indexRoutes = require('./routes/index');

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(indexRoutes);

//Inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})