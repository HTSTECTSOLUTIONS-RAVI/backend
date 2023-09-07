const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../database/db')


router.get('/', (req, res) => {
    res.json({ message: "Login API" })
})

router.post('/', async (req, res) => {

    const { username, password } = req.body


})

module.exports = router