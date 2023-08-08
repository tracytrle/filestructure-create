// const { data } = require("../layer2/data");

const fs = require("fs");
const data1 = fs.readFileSync("./db.json", "utf-8");
// console.log(data);
const data = JSON.parse(data1);

const printContent = () => {
  const lowestAgeObj = data.reduce((minAgeObj, currentAgeObj) => {
    if (currentAgeObj.age < minAgeObj.age) {
      return currentAgeObj;
    }
    return minAgeObj;
  });
  const highestAgeObj = data.reduce((maxAgeObj, currentAgeObj) => {
    if (currentAgeObj.age > maxAgeObj.age) {
      return currentAgeObj;
    }
    return maxAgeObj;
  });

  console.log("User", lowestAgeObj.name, " is youngest, age", lowestAgeObj.age);
  console.log("User", highestAgeObj.name, " is oldest, age", highestAgeObj.age);
};
// printContent();

module.exports = { printContent };
