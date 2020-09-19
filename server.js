/*const { response } = require('express')
//express é um código já feito por uma comunidade e serve para que usei os 
// protocolos http
const express = require('express')
const app = express()

app.get('/',function(request,response){
    response.send('Olá Mundo')
})

app.listen(8080)*/

const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function(){
    console.log("O nosso app esta rodando na porta" + PORT)
})