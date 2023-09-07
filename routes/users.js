const express = require('express')
const db = require('../database/db')

const Users = (req, res) => {

    const userQuery = `SELECT * FROM users`

    db.query(userQuery, (error, result) => {
        if(error){
            return null
        }
        return result
    })

}

module.exports = Users