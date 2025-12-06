const fs = require("fs");
const View = require("../Views/view");

class ToDo {
  constructor(task, id) {
    this.task = task;
    this.id = id;
  }
}

class Model {
  static load() {
    const result = JSON.parse(fs.readFileSync("./data.json", "utf8")).map(
      (td) => new ToDo(td.task, td.id)
    );
    return result;
  }
  static save(task) {
    fs.writeFileSync("./data.json", JSON.stringify(task, null, 4));
  }
  static findById(id) {
    const datas = Model.load();
    const result = datas.find((dt) => dt.id === +id);
    return result;
  }
  static create(id, task) {
    const datas = Model.load();
    if (datas.some((td) => td.id == id)) {
      View.error();
      return;
    }
    const data = new ToDo(task, +id);
    datas.push(data);
    Model.save(datas);
    return data;
  }
  static edit(id, task) {
    const datas = Model.load();
    const data = datas.filter((dt) => dt.id !== +id);
    let newData = new ToDo(task, +id);
    data.push(newData);
    data.sort((a, b) => a.id - b.id);
    Model.save(data);
    return newData;
  }
  static delete(id) {
    const data = Model.load().find((td) => td.id === +id);
    const datas = Model.load().filter((td) => td.id !== +id);
    Model.save(datas);
    return data;
  }
}

module.exports = Model;
