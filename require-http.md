# NodeJS

> Criando um servidor com HTTP

~~~ javascript

const http = require('http')

http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type': 'text/plain',
    })
    response.write('CFB Cursos \n')
    response.end()
}).listen(1337)

~~~

> Criando Rotas no Servidor NodeJS

~~~ javascript

const http = require('http')
const port = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if(req.url == '/'){
        res.write('<h1>Seja bem Vindo!</h1>')
    } else if(req.url == '/canal'){
        res.write('<h1>CFB Cursos</h1>')
    } else if(req.url == '/curso'){
        res.write('<h1>Conheça os cursos do nosso canal</h1>')
    } else if(req.url == '/curso/node'){
        res.write('<h1>Curso de Node</h1>')
    }
    res.end()
})

servidor.listen(port, host, ()=>{console.log('Servidor rodando...')})

~~~

~~~ javascript

const http = require('http')
const url = require('url')
const port = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write(req.url)
    const p = url.parse(req.url, true).query
    res.write('<br/>' + p.nome)
    res.write('<br/>' + p.curso)
    res.end()
})

servidor.listen(port, host, ()=>{console.log('Servidor rodando...')})

~~~