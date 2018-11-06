const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//valido si existe el puerto de heroku
const port = process.env.PORT || 3000;

//la carpeta que especifiquemos aqui quedara disponible para cualquier persona, sera publica
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'juan diego oliveros rios',
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Juan Diego',
    })
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})