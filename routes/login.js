const express = require('express')
const router = express.Router()
const db = require('../database/db')

router.get('/', (req, res) => {
    res.json({ message: "Login API" })
})

router.post('/', (req, res) => {

    const { username, password } = req.body

})

module.exports = router