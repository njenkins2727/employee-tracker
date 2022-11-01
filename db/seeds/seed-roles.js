const {faker} = require('@faker-js/faker');
const { addRoles } = require('../../operations/roles');

 async function seedRoles(num = 10){

for (let i = 0; i < num; i++) {
await addRoles(faker.commerce.productName(), 100, 1)    
 }
}

module.exports = {
    seedRoles,
}