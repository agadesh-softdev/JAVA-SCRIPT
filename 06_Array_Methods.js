// LENGTH
// To find the length of the array

{
  college = ["first year", "second year", "third year", "fourth year"];
  console.log(college.length);
}

// PUSH
// To add the element in the array                MODIFY THE ORIGINAL ARRAY

{
  college = ["first year", "second year", "third year", "fourth year"];
  pass = "passed out";
  result = college.push(pass);
  console.log(college);
}

// POP
// To remove the element from the array          MODIFY THE ORIGINAL ARRAY

{
  college = ["first year", "second year", "third year", "fourth year"];
  pass = "fouth year";
  result = college.pop(pass);
  console.log(college);
}

// UNSHIFT
// To add elements at the beginning of the array    MODIFY THE ORIGINAL ARRAY

{
  college = ["first year", "second year", "third year", "fourth year"];
  new_one = "fresher";
  result = college.unshift(new_one);
  console.log(college);
}

// SHIFT
// To remove the first element in the array          MODIFY THE ORIGINAL ARRAY

{
  college = ["first year", "second year", "third year", "fourth year"];
  new_one = "fresher";
  result = college.shift();
  console.log(college);
}

//SPLICE
// to add remove or replace any element from the array

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
