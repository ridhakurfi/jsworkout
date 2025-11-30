const action1 = process.argv[2];
const action2 = process.argv[3];
const action3 = process.argv[4];

const rules =
  action1 === undefined || action2 === undefined || action3 === undefined;

function tutor() {
  console.log("");
  console.log("Input is as follows => node abc.js command1 command2 command3");
  console.log("");
  console.log("--add command2 command3");
  console.log("--minus command2 command3");
  console.log("--multiply command2 command3");
  console.log("--divide command2 command3");
}

switch (action1) {
  case "add":
    rules ? tutor() : console.log(Number(action2) + Number(action3));
    break;
  case "minus":
    rules ? tutor() : console.log(Number(action2) - Number(action3));
    break;
  case "multiply":
    rules ? tutor() : console.log(Number(action2) * Number(action3));
    break;
  case "divide":
    rules ? tutor() : console.log(Number(action2) / Number(action3));
    break;
  default:
    tutor();
    break;
}
