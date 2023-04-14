
const http = require('http');

http.createServer( (req, res) => {

    console.log(req);

    req.write('Hola Mundo');
    res.end();
} )
.listen( 8080 );

console.log('Escuchando el puerto', 8080 ); 