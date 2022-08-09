const inquirer = require('inquirer');
const { getDepartments, addDepartment } = require('./operations/departments');
const { getRoles, addRoles } = require('./operations/roles');
function main(){
    
return inquirer.prompt([
    {
        message: 'what do you want?',
        type: 'list',
        name: 'operations',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',            
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role', //when user selects - show list of employee name to choose-- then update the new role (when)
            'exit',
        ]
    },
    {
        message: "what is the department name?",
        type: 'input',
        name: "department_name",
        when: (ans) => ans.operations === 'Add a department',
    },
    {
        message: "what is the role name?",
        type: 'input',
        name: "role_name",
        when: (ans) => ans.operations === 'Add a role',
    }
]).then (async (ans) => {
    switch(ans.operations){

        case "View all departments":
            const viewDepartments = await getDepartments();
            console.table(viewDepartments);
        break;

        case "View all roles":
            const viewRoles = await getRoles();
            console.table(viewRoles);
            break;

        case "View all employees":
            break;   
            
        case "Add a department":
            const addDepartment = await addDepartment(ans.department_name);
            break;

        case "Add a role":
            break;
            
        case "Add an employee":
            break;

        case "Update an employee role":
            break;

        case "exit":
            process.exit(0);
            break; 
    }
    await main();
 })

}

main();
//create cli to manage employees

// view all departments
// view all roles
// view all employees
// add a department
// add a role
// add an employee
// update an employee role
