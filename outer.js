const { greeting } = require("./layer1");
const { printData } = require("./layer2");
const { printContent } = require("./layer3");

console.log(greeting);
console.log("------");
console.log("This is the list of Users: ");
printData();
console.log("======");
printContent();
