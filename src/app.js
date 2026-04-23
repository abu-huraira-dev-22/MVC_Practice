const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const app =express()

app.get('/health',(req,res)=>{
    res.json({
        status:true,
        message:"Backend is working properly"
    })
})

app.listen(process.env.PORT,()=>{
    console.log('Server is running',process.env.PORT)
})