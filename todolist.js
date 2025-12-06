const Controller = require("./Controllers/controller");

const [command, param1, param2] = process.argv.slice(2);

switch (command) {
  case "list":
    Controller.list();
    break;
  case "find":
    Controller.findById(param1);
    break;
  case "create":
    Controller.create(param1, param2);
    break;
  case "edit":
    Controller.edit(param1, param2);
    break;
  case "delete":
    Controller.delete(param1);
    break;
  default:
    Controller.help();
    break;
}
