const {faker} = require('@faker-js/faker');
const { addDepartment } = require('../../operations/departments');

 async function seedDepertments(num = 10){

for (let i = 0; i < num; i++) {
await addDepartment(faker.commerce.department())    
 }
}

module.exports = {
    seedDepertments,
}