//  REQUIRED
const express = require('express')
const hbs = require('hbs');



//  Variables heredadas
const port = process.env.PORT || 3000;

const app = express()
app.use(express.static(__dirname + '/public'));



/* ########## METODOS DE ACCESO Y RUTAS PREDEFINIDAS ########## */
//Indico el directorio que almacena los PARTIALS
hbs.registerPartials(__dirname + '/views/partials');
//Express HBS engine
app.set('view engine', 'hbs');

//Configuramos una solicitud GET cuando el path sea /
app.get('/', (req, res) => {
    //Renderiza el archivo home.hbs
    res.render('home.hbs', {
        //nombre: 'Luis',
    });
});





/* ########## PONER EL SERVER A LA ESCUCHA ########## */
//Configuramos el puerto 3000
app.listen(port, () => {
    //Agregamos un callback que se dispara cuando el listen se active
    console.log(`Escuchando peticiones en el puerto ${port}`);
});