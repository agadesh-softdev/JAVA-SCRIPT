{
  function greet(a, b, agi) {
    result = a + b;
    agi(result);
  }
  function aga(sum) {
    console.log("The answer is " + sum);
  }
  greet(10, 20, aga);
}

{
  function agadesh(name, aga) {
    console.log("hi " + name);
    aga();
  }
  function agi() {
    console.log("bye");
  }
  agadesh("agi", agi);
}

{
  function aga(one, callback) {
    console.log(one);
    callback();
  }
  function timeout() {
    setTimeout(() => {
      console.log("Order 101 Placed successfully");
    }, 3000);
  }
  aga("Processing Order", timeout);
}

