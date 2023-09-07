const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../database/db')

// hashing password
const saltRounds = 10 

router.post('/', async (req, res) => {

    const { username, email, password } = req.body

    const hasdedPassword = await bcrypt.hash(password, saltRounds)

    const existUserQuery = `SELECT userUsername, userEmail FROM users WHERE userUsername = '${username}' || userEmail = '${email}'`

    const query = `INSERT INTO users (userUsername, userEmail, userPassword) VALUES ('${username}' , '${email}' ,'${hasdedPassword}')`;


    if (username == '' || email == '') {
        res.status(400).send({ message: "Username && Email are required..." })

    } else {

        db.query(existUserQuery, (error, result) => {

            if (error) {
                res.status(500).send({ message: `Internal Server Error`, error: error })
            }

            if (result.length > 0) {


                if (result[0].userUsername == username) {
                    res.status(400).send({ message: `You have already registered with given username...`, username: result[0].userUsername })
                }
                if (result[0].userEmail == email) {
                    res.status(400).send({ message: `You have already registered with given email...`, email: result[0].userEmail })
                }
            }

            else {

                db.query(query, (error, result) => {
                    if (error) {
                        res.status(500).send({ message: `Internal Server Error`, error: error })
                    }
                    res.send({ message: `New User Successfully Registered`, result })
                })
            }
        })
    }


})

module.exports = router