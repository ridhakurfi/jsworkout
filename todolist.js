const command = process.argv.slice(2);
const input1 = command[0];
const input2 = Number(command[1]);
const input3 = Number(command[2]);
const gate = command[0] === undefined || command[1] === undefined;
const guide = `please input correctly`;

switch (input1) {
  case "add":
    if (gate) {
      console.log(guide);
    } else {
      console.log(input2 + input3);
    }
    break;
  case "minus":
    if (gate) {
      console.log(guide);
    } else {
      console.log(input2 - input3);
    }
    break;
  case "multiply":
    if (gate) {
      console.log(guide);
    } else {
      console.log(input2 * input3);
    }
    break;
  case "divide":
    if (gate) {
      console.log(guide);
    } else {
      console.log(input2 / input3);
    }
    break;
  default:
    console.log(guide);
    break;
}
