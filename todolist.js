const fs = require("fs");

class Todo {
  constructor(id, task) {
    this.task = task;
    this.id = id;
  }
}

function findAll() {
  let todos = fs.readFileSync("./data.json", "utf8");
  
  todos = JSON.parse(todos);
  console.log(todos);

  let result = todos.map((todo) => {
    return new Todo(todo.id, todo.task);
  });

  return result;
}

findAll()
