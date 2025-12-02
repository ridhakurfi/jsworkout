const fs = require("fs");

class Hero {
  constructor(id, hero, power) {
    this.id = id;
    this.hero = hero;
    this.power = power;
  }
}

function readHero() {
  let heroes = JSON.parse(fs.readFileSync("./hero.json", "utf8"));
  let classed = heroes.map((hero) => new Hero(hero.id, hero.hero, hero.power));
  return classed;
}
// console.log(readHero());

function readOne(id) {
  let heroes = readHero();
  let hero = heroes.find((hr) => hr.id === id);
  console.log(hero);
}
// readOne(5);

function addHero(id, hero, power) {
  let heroes = readHero();
  let heroo = new Hero(id, hero, power);
  heroes.push(heroo);
  let henro = JSON.stringify(heroes, null, 4);
  fs.writeFileSync("./hero.json", henro);
  console.log("congrats");
}
// addHero(11, "Jumbo Fist", "Seismic Punch");

function editHero(id, hero, type) {
  let heroes = readHero();
  let heros = heroes.filter((hr) => hr.id !== id);
  let henro = new Hero(id, hero, type);
  heros.push(henro);
  heros = heros.sort((a, b) => a.id - b.id);
  let dataJSON = JSON.stringify(heros, null, 4);
  fs.writeFileSync("./hero.json", dataJSON);
  console.log("congrats");
}
// editHero(3, "Jamaludin", "Baseketball");

function deleteHero(id) {
  let heroes = readHero().filter((hr) => hr.id !== id);
  let dataJSON = JSON.stringify(heroes, null, 4)
  fs.writeFileSync("./hero.json", dataJSON)
  console.log("congrats");
}
deleteHero(11);
