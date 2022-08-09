const { seedDepartments } = require("./seed-departments");
const { seedRoles } = require("./seed-roles");

async function main(){

    await seedDepartments();
    await seedRoles();
}

main();
