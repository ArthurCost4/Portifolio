const express = require('express')
const cors    = require('cors')
const consign = require('consign')
const ejs     = require('ejs')

var app = express()
app.use(cors())

app.set('view engine', 'ejs');
app.use(express.static('public'))
consign()
    .include('./controllers/routes')
    .into(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado no link http://localhost:${PORT}`)
})