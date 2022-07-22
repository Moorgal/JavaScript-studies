const car = {
  make: "lada",
  model: "samara",
  year: 1985,
  colors: ["yellow", "red"],
  hybrid: true,
  drive: function () {
    console.log("drive...");
  },
  stop() {
    console.log("stopped");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
