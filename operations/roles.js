const { connect } = require("../db/connection")

async function addRoles(title, salary, department_id){
 
    const db = await connect();
  
    await db.query('INSERT INTO employee_tracker`.roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);  
  }

async function getRoles(){

    const db = await connect();

  const [roles] = await db.query('SELECT * FROM roles');

  return roles;
}

module.exports = {
    addRoles,
    getRoles,
}