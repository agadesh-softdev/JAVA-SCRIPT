// 01.LENGTH
// To find the length of the array

console.log("01.LENGTH");

{
  college = ["first year", "second year", "third year", "fourth year"];
  console.log(college.length);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// 02.PUSH
// To add the element in the array                MODIFY THE ORIGINAL ARRAY

console.log("02.PUSH");

{
  college = ["first year", "second year", "third year", "fourth year"];
  pass = "passed out";
  result = college.push(pass);
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// 03.POP
// To remove the element from the array          MODIFY THE ORIGINAL ARRAY

console.log("03.POP");

{
  college = ["first year", "second year", "third year", "fourth year"];
  pass = "fouth year";
  result = college.pop(pass);
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// 04.UNSHIFT
// To add elements at the beginning of the array    MODIFY THE ORIGINAL ARRAY

console.log("04.UNSHIFT");

{
  college = ["first year", "second year", "third year", "fourth year"];
  new_one = "fresher";
  result = college.unshift(new_one);
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// 05.SHIFT
// To remove the first element in the array          MODIFY THE ORIGINAL ARRAY

console.log("05.SHIFT");

{
  college = ["first year", "second year", "third year", "fourth year"];
  result = college.shift();
  console.log(college);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// 06.SPLICE
// to add remove or replace any element from the array    MODIFY THE ORIGINAL ARRAY

console.log("06.SPLICE");

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

// 07.SORT
// To sort a element from a given array

console.log("07.SORT");
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

// 08.REVERSE
// Used to reverse the elements

console.log("08.REVERSE");

{
  let element = ["agadesh", "dev", "aarthi"];
  reverse_element = element.reverse();
  console.log(reverse_element);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------"
);

// 09.FILL
// Used to fill the element using index

console.log("09.FILL");

{
  let box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let xbox = box.fill(0, 4, 7);
  console.log(xbox);
}

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------"
);

// 10.CONCAT
// Concatenate the two array into one or what ever it is

console.log("10.CONCAT");

{
  let arr = ["1,2,3"];
  let arra = ["4,5"];
  let concat = arr.concat(arra);
  console.log(concat);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------"
);

// 11.SLICE
// It slice or cut the array by using index

console.log("11.SLICE");

{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  sliced = arr.slice(0, 2);
  console.log(sliced);
}

console.log(
  "---------------------------------------------------------------------------------------------------------------------------------------------"
);

// 12.COPYWITHIN
// It copy and paste the element by using index in the array

console.log("12.COPYWITHIN");

{
  let name = ["agadesh", "aga", "agi", "aki", "hello"];
  let res = name.copyWithin(0, 2);
  console.log(res);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);
