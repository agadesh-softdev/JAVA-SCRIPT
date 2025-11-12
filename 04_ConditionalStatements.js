// CONDITIONAL STATEMENTS
// 1.if 2.else 3.else if 4.ternary statement 5.switch statement

{
  let agadesh = 10;
  if (agadesh % 2 == 0) {
    console.log("It is even number");
  } else {
    console.log("It is odd number");
  }
}

{
  let day = "sunday";
  if (day == "sunday" || day == "saturday") {
    console.log("Enjoyyyyy..... It's a Weekend.....");
  } else if (day == "monday") {
    console.log("Go back to work its a Weekday");
  } else if (day == "tuesday") {
    console.log("Go back to work its a Weekday");
  } else if (day == "wednesday" || day == "thursday" || day == "friday") {
    console.log("Go back to work its a Weekday");
  } else {
    console.log("You entered a invalid day");
  }
}

{
  let face = "agi";
  switch (face) {
    case "agi":
      console.log("Match found at 01.Agi");
      break;
    case "aga":
      console.log("Match found at 02.Aga");
      break;
    case "agii":
      console.log("Match found at 03.Agii");
      break;
    case "agadesh":
      console.log("Match found at 04.Agadesh");
      break;
    case "agadeshwaran":
      console.log("Match founf at 05.Agadeshwaran");
      break;
    default:
      console.log("Match not found");
  }
}

{
  let savedinfo = false;
  let save = savedinfo ? "Welcome Back" : "Login";
  console.log(save);
}
