let product = false;
{
  function shop() {
    return new Promise((resolve, reject) => {
      if (product) {
        resolve("Here your product");
      } else {
        reject("sorry out of stock");
      }
    });
  }
  async function keeper() {
    try {
      let keeper = await shop();
      console.log(keeper);
    } catch (error) {
      console.log("Over");
    }
  }
  keeper();
}
