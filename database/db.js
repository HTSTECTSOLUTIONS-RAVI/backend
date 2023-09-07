const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'e-commerce'
})

conn.connect((err) => {
    if(err){
        console.log(`Database Connection Failed With Express...`)
    }
    console.log(`Database Connection Connted With Express...`)
})

module.exports = conn