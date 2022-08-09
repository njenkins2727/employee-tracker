try{
require('dotenv').config();
}catch(err){
    console.log(err);
} //consider scenerio- in production we dont have dotenv module thqats why we run try catch block. cant call config undefined.

const mysql = require('mysql2/promise'); //promise varient easier to handle 

function connect(){

    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employee_tracker',
    })
}

module.exports = {connect}; //export as object so vs can auto import for us 