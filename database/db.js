const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'e-commerce'
})

conn.connect((error) => {
    if(error){
        console.log(`Database Connection Failed With Express...`)
    }

    console.log(`Database Connection Connected With Express...`)
})

module.exports = conn