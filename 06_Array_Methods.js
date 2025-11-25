// LENGTH
// To find the length of the array

{
  college = ["first year", "second year", "third year", "fourth year"];
  console.log(college.length);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// PUSH
// To add the element in the array                MODIFY THE ORIGINAL ARRAY

console.log("PUSH");

{
  college = ["first year", "second year", "third year", "fourth year"];
  pass = "passed out";
  result = college.push(pass);
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// POP
// To remove the element from the array          MODIFY THE ORIGINAL ARRAY

console.log("POP");

{
  college = ["first year", "second year", "third year", "fourth year"];
  pass = "fouth year";
  result = college.pop(pass);
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// UNSHIFT
// To add elements at the beginning of the array    MODIFY THE ORIGINAL ARRAY

console.log("UNSHIFT");

{
  college = ["first year", "second year", "third year", "fourth year"];
  new_one = "fresher";
  result = college.unshift(new_one);
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// SHIFT
// To remove the first element in the array          MODIFY THE ORIGINAL ARRAY

console.log("SHIFT");

{
  college = ["first year", "second year", "third year", "fourth year"];
  result = college.shift();
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

//SPLICE
// to add remove or replace any element from the array    MODIFY THE ORIGINAL ARRAY

console.log("SPLICE");

{
  college = ["first year", "second year", "third year", "fourth year"];
  new_one = "fresher";
  result = college.splice(0, 1, "fresher"); // replace the fresher instead of first year
  console.log(college);
}

{
  {
    college = ["first year", "second year", "third year", "fourth year"];
    new_one = "fresher";
    result = college.splice(3, 0, "about to final year"); // add about to final year
    console.log(college);
  }
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// SORT
// To sort a element from a given array

console.log("SORT");
{
  let a = [
    1, 4, 23, 67, 2, 6, 56, 98, 34, 56, 87, 334, 556, 2, 76, 9, 44, 345, 12, 6,
  ];
  let b = a.sort((a, b) => a - b); // this logic used for a numerical ascending order
  console.log(b);
}
{
  let names = ["agadesh", "aarthi", "alli", "rajendran", "jacky", "julie"];
  let sorted_names = names.sort(); // this sorting used for attendance order
  console.log(sorted_names);
}
{
  let employee = [
    { name: "aarthi", age: 23 },
    { name: "agadesh", age: 20 },
    { name: "dev", age: 19 },
  ];
  let sorted_age = employee.sort((a, b) => a.age - b.age); // this will sort by age 
  console.log(sorted_age);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------"
);
