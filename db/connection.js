try{
require('dotenv').config();
}catch(err){
    console.log(err);
}

const mysql = require('mysql2/promise');

function connect(){

    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employee_tracker',
    })
}

module.exports = {connect};