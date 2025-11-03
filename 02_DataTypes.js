// There are different types of data types
// Number String Boolean Null Undefined

{
  // When we store number in a variable it will considered as number datatype
  let a = 1;
  console.log(typeof a);
}
{
  // In JS everything in the single or double quotes are considered as String
  let a = "Agi";
  console.log(typeof a);
}
{
  let a = true;
  console.log(typeof a);
}
{
  //In this it will consider this as a object
  let a = null;
  console.log(typeof a);
}
{
  // In this we doesn't declare any value inside the variable so it will return Undefined
  let a;
  console.log(a);
}

{
  let Person = {
    Name: "Agadeshwaran R",
    Age: 20,
    Phone: 6381458174,
    Skills: {
      HTML: "2 years",
      CSS: "2 years",
      JAVA: " 2 years",
    },
  };
  console.log(Person.Skills.JAVA);
}
