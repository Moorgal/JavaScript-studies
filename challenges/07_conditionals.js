let person1 = {
  name: "john",
  age: "14",
  status: "resident",
};
let person2 = {
  name: "peter",
  age: "23",
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("older then 18 and resident");
} else {
  console.log("you are not whatever");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("older then 18 and resident");
} else {
  console.log("you are not whatever");
}
