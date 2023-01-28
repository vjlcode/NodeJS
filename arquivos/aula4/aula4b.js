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


