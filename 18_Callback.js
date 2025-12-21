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

{
  let username = "admin";
  let password = "1234";

  function login(callback) {
    console.log("Validating User");
    if (username == "admin" && password == "1234") {
      setTimeout(() => {
        callback("Login Successfull");
      }, 2000);
    } else {
      setTimeout(() => {
        callback("Invalid Credentials");
      }, 2000);
    }
  }
  function show(message) {
    console.log(message);
  }
  login(show);
}

{
  function products(callback) {
    console.log("Fetching Product Details");
    const names = {
      id: 501,
      product_name: "laptop",
      price: 65000,
      instock: true,
    };
    callback(names);
  }
  function person(product) {
    console.log("Proudct ID :", product.id);
    console.log("Proudct Name :", product.product_name);
    console.log("Price :", product.price);
    console.log("In stock :", product.instock);
  }
  products(person);
}

{
  function num(a, back) {
    result = a * 2;
    back(result);
  }
  function aga(agi) {
    console.log("The number is " + agi);
  }
  num(10, aga);
}
