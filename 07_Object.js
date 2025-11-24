// Creating a object

{
  let info = {
    name: "agadesh",
    age: 20,
    degree: "B.E",
    branch: "CS",
  };
  console.log(info.name);
  console.log(info.age);
  console.log(info.degree);
  console.log(info["branch"]);
}

console.log("=============================================================================================================================================================");

// creating a object using variables

{
  let deg = {
    agi: "CS",
    dev: "Mech",
  };
  let devupdate = "dev";
  let agiupdate = "agi";
  console.log(deg);
  console.log(deg[agiupdate]);
  console.log(deg.devupdate); //undefined
  // because it's stored in a variable and then its called by . in case it's called by a[] then it'll be worked
}

console.log("==============================================================================================================================================================");
