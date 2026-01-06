{
  let currentdate = new Date();
  console.log(currentdate);
}

//----------------------------------------------------------------------------------------------------------------------------------

{
  let currentdate = new Date();
  let year = currentdate.getFullYear();
  let month = currentdate
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  let day = currentdate.getDate();
  let hours = currentdate.getHours();
  let minutes = currentdate.getMinutes();
  let seconds = currentdate.getSeconds();
  let miliseconds = currentdate.getMilliseconds();
  let mydate = "CURRENT DATE : " + day + "/" + month + "/" + year;
  console.log(mydate);
  let mytime =
    "CURRENT TIME : " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    ":" +
    miliseconds;
  console.log(mytime);
}
