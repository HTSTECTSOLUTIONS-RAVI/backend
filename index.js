const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./database/db')

const login = require('./routes/login')

app.use('/login', login)

app.listen(port, () => {
    console.log(`Express started at port : ${port}`)
})