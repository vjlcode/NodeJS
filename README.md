# NodeJS

> Criando um servidor com HTTP

```javascript
const http = require('http')

http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type': 'text/plain',
    })
    response.write('CFB Cursos \n')
    response.end()
}).listen(1337)
```

> Iniciar servidor

```sh
node app.js
http://localhost:1337/
```


> Criando Rotas no Servidor NodeJS

```javascript
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
```

```javascript
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
```

## Instalação Express

```sh
mkdir projeto
touch app.js
npm install express --save
```


> Criando Rotas usando Express

```javascript
const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (req, res) => {
    res.send('CFB Cursos')
})
app.get('/canal', (req, res) => {
    res.json({canal: 'CFB Cursso'})
})


app.listen(porta || 3000, () => {'Servidor rondando...'})
```
> Lendo arquivo html em node

```javascript

const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, arquivo) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000, () => {console.log("Servidor rondando..")})

```

> Criando um arquivo automaticamente usando appendFile

```javascript

const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) => {
    fs.appendFile('teste.txt', 'Curso de Node - CFB Curso', (err) => {
        if(err) throw err
        console.log('arquivo criado')
    })
})

server.listen(porta || 3000, () => {console.log("Servidor rondando..")})

```

> Modularizando as rotas do App nodeJS

```sh
mkdir projeto
touch index.js
touch rotas.js
npm install express --save
npm install router --save
```

```javascript

const express = require('express')
const rotas=express.Router()

let cursosInfo=[
    {'curso': 'node', 'info':'Curso de Node'},
    {'curso': 'react', 'info':'Curso de React'},
    {'curso': 'java', 'info':'Curso de Java'},
    {'curso': 'arduino', 'info':'Curso de Arduino'}
]

rotas.get('/', (req, res) => {
    res.json({ola: 'Seja bem vindo!'})
})

rotas.get('/:cursoid', (req, res) => {
    const curso=req.params.cursoid
    let cursoI=cursosInfo.find(i=>i.curso == curso)
    if(!cursoI){
        res.status(404).json({
            erro: 'Curso não encontrado', cursoPesquisar: curso
        })
    } else {
        res.status(200).json(cursoI)
    }
})

module.exports = rotas

```


```javascript

const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT || 3000

const app=express()

app.use('/', rotas)

app.get('*', (req, res) => {
    res.send('CFB Cursos')
})

app.listen(porta, () => { console.log('Rodando') })

```


