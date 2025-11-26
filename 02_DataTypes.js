// There are different types of data types
// Number String Boolean Null Undefined

{
  // When we store number in a variable it will considered as number datatype
  var b = 1;
  console.log(b);
  let a = 1;
  console.log(typeof a);
}

console.log("-----------------------------------------------------------------------------------------------------------");

{
  // In JS everything in the single or double quotes are considered as String
  var b = "Agi";
  console.log(b);
  let a = "Agi";
  console.log(typeof a);
}

console.log("-----------------------------------------------------------------------------------------------------------");

{
  // In this the result is yes or no type because it is boolean
  var b = true;
  console.log(b);
  let a = true;
  console.log(typeof a);
}

console.log("-----------------------------------------------------------------------------------------------------------");

{
  //In this it will consider this as a object
  var b = null;
  console.log(b);
  let a = null;
  console.log(typeof a);
}

console.log("-----------------------------------------------------------------------------------------------------------");

{
  // In this we doesn't declare any value inside the variable so it will return Undefined
  let a;
  console.log(typeof a);
}

console.log("-----------------------------------------------------------------------------------------------------------");

{
  let Person = {
    Name: "Agadeshwaran R",
    Age: 20,
    Phone: 6381458174,
    Skills: {
      HTML: "2 years",
      CSS: "2 years",
      JAVA: "2 years",
    },
  };
  console.log(Person.Skills.JAVA);
}

console.log("-----------------------------------------------------------------------------------------------------------");
