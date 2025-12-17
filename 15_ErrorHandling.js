let num = 10;
let div = -2;
try {
  let result = num / div;
  if (div == 0) throw "Number cannot be divided by zero";
  if (div < 0) throw "Number must be positive";
  console.log(result);
} catch (error) {
  console.log(error);
}
