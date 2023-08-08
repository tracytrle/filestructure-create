// const { data } = require("./data");

// another way: then use objData.data.forEach...
// let objData = require("./data");
// data

const fs = require("fs");
const data1 = fs.readFileSync("./db.json", "utf-8");
// console.log(data);
const data = JSON.parse(data1);
// console.log(data);
const printData = () => {
  data.forEach((obj) => {
    console.log("User name is: ", obj.name);
    console.log("User age is: ", obj.age);
  });
};

// printData();
module.exports = { printData };
