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