const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Juan diego',
            apelldio: 'oliveros rios',
            edad: 19,
            url: req.url
        };

        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();
    })
    .listen(8080);


console.log('Escuchando el puerto 8080');