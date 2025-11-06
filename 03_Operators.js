// Operators

// 01.ARITHMETIC OPERATOR

// ADDITION
{
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
}

//MULTIPLICATION
{
  let a = 30;
  let c = 10;
  console.log(a - c);
}

// DIVISION
{
  let a = 20;
  let c = 2;
  console.log(a / c);
}

//MODULUS
{
  let a = 11;
  let b = 2;
  console.log(a % b);
}

//EXPONENTIATION
{
  let a = 10;
  let b = 2;
  console.log(a ** b);
}

// 02.COMPARISON OPERATOR

{
  let a = 10;
  let b = 20;
  if (a < b) {
    console.log("b is greater");
  }
}
{
  let a = 10;
  let b = 20;
  if (a >= b) {
    console.log("a is greater");
  } else {
    console.log("b is greater");
  }
}
{
  let a = 10;
  let b = 10;
  if (a == b) {
    console.log("both are equal");
  } else {
    console.log("both are not equal");
  }
}
{
  let a = 10;
  let b = "20";
  if (a === b) {
    console.log("both a and b type are equal");
  } else {
    console.log("both a and b type are not equal");
  }
}

// 03.LOGICAL OPERATOR

{
  let a = true;
  let b = true;
  if (a && b) {
    console.log("both are true");
  } else {
    console.log("both are not true");
  }
}
{
  let a = false;
  let b = true;
  if (a || b) {
    console.log("both are true");
  } else {
    console.log("both are not true");
  }
}
{
  let a = true;
  console.log(!a);
}
