{
  let jan = /agadesh/;
  let text = "agadesh";
  let result = jan.test(text);
  console.log(result);
}
{
  let jan = /agadesh/i; // Using /i     " That's help you to check without case which is upper or lower"
  let text = "AgadesH";
  let result = jan.test(text);
  console.log(result);
}
{
  let jan = /[a-z]/; // Check its only in a-z
  let text = "agadesh";
  let result = jan.test(text);
  console.log(result);
}
{
  let jan = /[0-9]/;
  let text = "agadesh 1"; // Check if there is a 0-9 numbers in the text
  let result = jan.test(text);
  console.log(result);
}

// OR

{
  let jan = /[a-z0-9]/; // check the text is either a-z or 0-9
  let text = "a";
  let result = jan.test(text);
  console.log(result);
}

// AND

{
  let jan = /[a-z][0-9]/; // its check only a character followed by number in that (ho) is found
  let text = "agadesh0";
  let result = jan.test(text);
  console.log(result);
}

// +

{
  let jan = /[0-3]+[a-b]/; // its true in this + denotes [0-3]repeats atleast one and its followed by a-b
  let text = "00000040000a";
  let result = jan.test(text);
  console.log(result);
}

// *

{
  let jan = /agadesh/;
  let text = "agadesh";
  let result = jan.test(text);
  console.log(result);
}
