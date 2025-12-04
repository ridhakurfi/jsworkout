const fs = require("fs");

class Vehicle {
  constructor(id, weapon, movement) {
    this.id = id;
    this.weapon = weapon;
    this.movement = movement;
  }
}

function readVH() {
  const vehicles = JSON.parse(fs.readFileSync("./vehicle.json", "utf8")).map(
    (vh) => new Vehicle(vh.id, vh.weapon, vh.movement)
  );
  return vehicles;
}
// console.log(readVH());

function readOne(id) {
  const vehicles = readVH().find((vh) => vh.id === id);
  return vehicles;
}
// console.log(readOne(2));

function addVH(id, weapon, movement) {
  const vehicles = readVH();
  vehicles.push(new Vehicle(id, weapon, movement));
  fs.writeFileSync("./vehicle.json", JSON.stringify(vehicles, null, 4));
  return `congrats`;
}
// console.log(addVH(11, "Thunder Gatling", "Anti-Grafity Craft"));

function editVH(id, weapon, movement) {
  const vehicles = readVH().filter((vh) => vh.id !== id);
  vehicles.push(new Vehicle(id, weapon, movement));
  vehicles.sort((a, b) => a.id - b.id);
  fs.writeFileSync("./vehicle.json", JSON.stringify(vehicles, null, 4));
  return `congrats`;
}
// console.log(editVH(11, "Sonor Sonic Boom", "Teleporter"));

function deleteVH(id) {
  const vehicles = readVH().filter((vh) => vh.id !== id);
  fs.writeFileSync("./vehicle.json", JSON.stringify(vehicles, null, 4));
  return `congrats`;
}
console.log(deleteVH(11));
