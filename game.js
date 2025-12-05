const fs = require("fs");

class Level {
  constructor(id, modifier, place) {
    this.id = id;
    this.modifier = modifier;
    this.place = place;
  }
}

function readLevel() {
  let levels = JSON.parse(fs.readFileSync("./level.json", "utf8")).map(
    (lv) => new Level(lv.id, lv.modifier, lv.place)
  );
  return levels;
}
// console.log(readLevel());

function readOne(id) {
  if (!id) return "please input ID";
  let levels = readLevel().find((lv) => lv.id === id);
  if (!levels) return `ID ${id} not found`;
  return levels;
}
// console.log(readOne());

function createLevel(id, modifier, place) {
  const errors = [];
  if (typeof id !== "number") errors.push("Please input an ID number");
  if (typeof modifier !== "string" || modifier.trim().length === 0) {
    errors.push("Please input a string Modifier");
  }
  if (typeof place !== "string" || place.trim().length === 0) {
    errors.push("Please input a string Place");
  }
  if (errors.length) return errors.join(", ");
  let levels = readLevel();
  if (levels.some((level) => level.id === id)) {
    return `ID ${id} is already taken`;
  }
  levels.push(new Level(id, modifier, place));
  return levels;
}
console.log(createLevel(11, "Leaf", "Terrarium"));
