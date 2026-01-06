// GLOBAL SCOPE

let agadesh = "Agadeshwaran R";
console.log(agadesh); // output:Agadeshwaran R

console.log(
  "-----------------------------------------------------------------------------------------------------------"
);

//----------------------------------------------------------------------------------------------------------------------------------
// LOCAL SCOPE

function line() {
  let message = "Hello world";
  console.log(message);
}
line(); // output: Hello world
console.log(message); // Error:ReferenceError :stack is not defined

console.log(
  "-----------------------------------------------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------------------------------------------------------
// FUNCTION SCOPE

function agi() {
  let stack = "Hello World..";
  console.log(stack);
}
agi(); // output: Hello world
console.log(stack); // Error : ReferenceError : Stack is not defined

console.log(
  "-----------------------------------------------------------------------------------------------------------"
);

//-------------------------------------------------------------------------------------------------------------------------------------
// LEXICAL SCOPE

function hi() {
  one = "Hello world";
  function hello() {
    console.log(one); // LEXICAL      Output: Hello world
  }
  hello();
}
hi();

console.log(
  "-----------------------------------------------------------------------------------------------------------"
);

//-------------------------------------------------------------------------------------------------------------------------------------
//CLOSER

function monitor() {
  let a = 0;
  function key() {
    a++;
    console.log(a);
  }
  return key;
}
res = monitor();
res();
res();
res();

console.log(
  "-----------------------------------------------------------------------------------------------------------"
);
