const command = process.argv.slice(2);
const input1 = command[0];
const input2 = Number(command[1]);
const input3 = Number(command[2]);
const filter = command[0] === undefined || command[1] === undefined;
const guide = `please input correctly`;

switch (input1) {
  case "add":
    if (filter) {
      console.log(guide);
    } else {
      console.log(input2 + input3);
    }
    break;
  case "minus":
    if (filter) {
      console.log(guide);
    } else {
      console.log(input2 - input3);
    }
    break;
  case "multiply":
    if (filter) {
      console.log(guide);
    } else {
      console.log(input2 * input3);
    }
    break;
  case "divide":
    if (filter) {
      console.log(guide);
    } else {
      console.log(input2 / input3);
    }
    break;
  default:
    console.log(guide);
    break;
}
