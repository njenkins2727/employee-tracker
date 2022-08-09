const inquirer = require('inquirer');
const { getDepartments, addDepartment } = require('./operations/departments');

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
    }
]).then (async (ans) => {
    switch(ans.operations){

        case "view all departments":
            const departments = await getDepartments();
            console.table(departments);
        break;

        case "View all roles":
            break;

        case "View all employees":
            break;   
            
        case "Add a department":
            const department = await addDepartment(ans.department_name);
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
