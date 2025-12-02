const fs = require("fs");

class Biome {
  constructor(id, modifier, place) {
    this.id = id;
    this.modifier = modifier;
    this.place = place;
  }
}

function read() {
  let bios = JSON.parse(fs.readFileSync("./biome.json", "utf8"));
  let result = bios.map((n) => {
    return new Biome(n.id, n.modifier, n.place);
  });
  //   console.log(result);
  return result;
}
// console.log(read());

function create(identifier, modify, places) {
  const bios = read();
  bios.push(new Biome(identifier, modify, places));
  let dataJSON = JSON.stringify(bios, null, 4);
  fs.writeFileSync("./biome.json", dataJSON);
  console.log(
    "Congrats a new Biome has been added=>",
    new Biome(identifier, modify, places)
  );
}
// create(11, "Blazing", "Sahara");

function readOne(find) {
  let bios = read();
  let bio = bios.find((n) => n.place === find);
  if (bio === undefined) {
    console.log("Biome not found!");
    return;
  }
  console.log(bio);
}
// readOne("Castl")

function readOne(identifier) {
  const bios = read();
  const bio = bios.find((n) => n.id === identifier);
  if (bio === undefined) {
    console.log(`Biome ${identifier} to delete not found`);
    return;
  }
  console.log(bio);
}
// readOne(3);

function update(identifier, modi, pla) {
  let bios = read();
  let edit = bios.find((n) => n.id === identifier);
  if (edit === undefined) {
    console.log("Biome to edit not found!");
    return;
  }
  edit = new Biome(identifier, modi, pla);
  let filtered = bios.filter((n) => n.id !== identifier);
  filtered.push(edit);
  filtered.sort((a, b) => a.id - b.id);
  let dataJSON = JSON.stringify(filtered, null, 4);
  fs.writeFileSync("./biome.json", dataJSON);
  console.log("Biome succesfully updated=>", edit);
}
// update(4, "Abandoned", "Factory");

function deleteBiome(identifier) {
  const bios = read();
  const bio = bios.filter((n) => n.id !== identifier);
  if (bios.length === bio.length) {
    console.log(`Biome with ${identifier} not found!`);
    return;
  }
  let dataJSON = JSON.stringify(bio, null, 4);
  fs.writeFileSync("./biome.json", dataJSON);
  console.log(`Succesfully deleted Biome ${identifier}`);
}

deleteBiome(3);
