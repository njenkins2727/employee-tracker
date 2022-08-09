const { seedDepertments } = require("./seed-departments");

async function main(){

    await seedDepertments();
}

main();
