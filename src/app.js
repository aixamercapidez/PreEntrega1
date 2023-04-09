const express = require('express')
// import express from 'express'

const app = express()
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));
const productRouter = require('./routes/products.router')
const cartRouter = require('./routes/carts.router')

// app.use(express.static(__dirname+'/public'))

app.use('/api/products',productRouter)
app.use('/api/carts',cartRouter)

app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080')
})