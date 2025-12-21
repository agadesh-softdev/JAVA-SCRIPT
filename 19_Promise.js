{
  let promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
      resolve("Operation Successful");
    } else {
      reject("Operation Failed");
    }
  });
  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

{
  let order = new Promise((resolve, reject) => {
    food = true;
    if (food) {
      setTimeout(() => {
        resolve("Your food is ready");
      }, 3000);
    } else {
      setTimeout(() => {
        reject("sorry food is out of stock");
      }),
        1000;
    }
  });
  order
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}
