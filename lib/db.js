// mysql://b3ef41538817b3:c630818b@eu-cdbr-west-01.cleardb.com/heroku_947df7bdb045e25?reconnect=true

let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b3ef41538817b3',
    password: "c630818b",
    database: "heroku_947df7bdb045e25"
})

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Connected!")
    }
})

module.exports = connection