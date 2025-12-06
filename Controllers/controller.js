const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
  static list() {
    const data = Model.load();
    View.list(data);
  }
  static findById(id) {
    const data = Model.findById(id);
    View.findById(data);
  }
  static create(id, task) {
    const data = Model.create(id, task);
    View.create(data);
  }
  static edit(id, task){
    const data = Model.edit(id, task)
    if (!data) {
      View.error()
      return
    };
    View.edit(data)
  }
  static delete(id){
    const data = Model.delete(id)
    if (!data) {
      View.error()
      return
    }
    View.delete(data)
  }
  static help() {
    View.help();
  }
}

module.exports = Controller;
