function calculateTotal(subTotal, tax) {
  //   const total = subTotal + tax;
  //   return total;
  return subTotal + tax;
}
let order1, order2, order3;
order1 = calculateTotal(3, 6);
order2 = calculateTotal(68, 8);
order3 = calculateTotal(35, 3);

console.log(order1, order2, order3);
// function expression
let total = function (subTotal, tax) {
  return subTotal + tax;
};
// arrow function
let calculateTotal = (subTotal, tax) => subTotal + tax;
