//config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler JSON => utilizar MidleWares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/pessoas', personRoutes)

//rota inicial / endpoint
app.get('/', (req,res)=>{

    //mostrar requisição/resposta
    res.json({
        message: 'Oi express!'
    })
})

// entregar uma porta
const DB_USER = 'pedro'
const DB_PASSWORD = encodeURIComponent('u82WnXBkuQYGV1ny')

mongoose 
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vjrea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)

.then(()=>{
    console.log('Conectamos ao DB com sucesso!')
    app.listen(3000)
})

.catch((err)=>{
    console.log(err)
})
 