const http = require('http');

http.createServer((request, response) => {
    response.end('<h1> Bem vindo ao meu site! </h1> <br /> <h4> Guia do Programador</h4>');
}).listen(3000);

console.log('Meu Servidor está rodando');