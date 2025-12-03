const fs = require("fs");

class Wonder {
  constructor(id, name, country) {
    this.id = id;
    this.name = name;
    this.country = country;
  }
}

function readWonder() {
  const wonders = JSON.parse(fs.readFileSync("./wonders.json", "utf8")).map(
    (wn) => new Wonder(wn.id, wn.name, wn.country)
  );
  return wonders;
  //   console.log(wonders);
}
// readWonder()

function readOne(id) {
  let wonders = readWonder().find((wn) => wn.id === id);
  console.log(wonders);
}
// readOne(2);

function createWonder(id, name, country) {
  let wonders = readWonder();
  wonders.push(new Wonder(id, name, country));
  let dataJSON = JSON.stringify(wonders, null, 4);
  fs.writeFileSync("./wonders.json", dataJSON);
  console.log("congrats");
}
// createWonder(11, "Eifel Tower", "France");

function editWonder(id, name, country) {
  let wonders = readWonder().filter((wn) => wn.id !== id);
  wonders.push(new Wonder(id, name, country));
  let dataJSON = JSON.stringify(wonders, null, 4);
  fs.writeFileSync("./wonders.json", dataJSON);
  console.log("congrats");
}
// editWonder(11, "Liberty Statue", "USA");

function deleteWonder(id) {
  let wonders = readWonder().filter((wn) => wn.id !== id);
  let dataJSON = JSON.stringify(wonders, null, 4);
  fs.writeFileSync("./wonders.json", dataJSON);
  console.log("congrats");
}
// deleteWonder(11);
