const { connect } = require("../db/connection")

async function addDepartment(name){
 
  const db = await connect();

 await db.query('INSERT INTO `employee_tracker`.`departments` (`name`) VALUES (?)', name);

}

async function getDepartments(){

const db = await connect();

  const [departments] = await db.query('SELECT * FROM departments'); //extracts out the rows 

  return departments;
}

module.exports = {
    addDepartment,
    getDepartments,
}