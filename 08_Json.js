// convert file into json(String)

let info = {
  name: "agadesh",
  age: 20,
  degree: "B.E",
  branch: "CS",
};

const string_info = JSON.stringify(info);
console.log(string_info);
//------------------------------------------------
const parse_info = JSON.parse(string_info);
console.log(parse_info);
