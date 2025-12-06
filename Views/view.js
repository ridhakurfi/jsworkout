const { log } = require("node:console");

class View {
  static list(datas) {
    console.log(datas);
  }
  static findById(data) {
    console.log(data);
  }
  static create(data) {
    console.log("data scuccesfully added =>");
    const { task, id } = data;
    console.log(`ID ${id}, name of task ${task}`);
  }
  static edit(data){
    console.log("data scuccesfully edited =>");
    const { task, id } = data;
    console.log(`ID ${id}, name of task ${task}`);
  }
  static delete(data){
    console.log("Sucess to delete ID", data.id);
  }
  static help() {
    console.log("");
    console.log("-- Welcome --");
    console.log("MY CRUD PRACTICE");
    console.log("-- Enjoy your stay --");
    console.log("");
  }
  static error() {
    console.log(`some error occured`);
  }
}
module.exports = View;
