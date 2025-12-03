const fs = require("fs");

class Movie {
  constructor(id, title, genre) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }
}

function readMovie() {
  let movies = JSON.parse(fs.readFileSync("./movies.json", "utf8")).map(
    (mv) => new Movie(mv.id, mv.title, mv.genre)
  );
  return movies;
}
// console.log(readMovie());

function readOne(id) {
  let movie = readMovie().find((mv) => mv.id === id);
  movie ? console.log(movie) : console.log(`Movie with ID ${id} not found!`);
}
// readOne(11);

function createMovie(id, title, genre) {
  let movies = readMovie();
  movies.push(new Movie(id, title, genre));
  fs.writeFileSync("./movies.json", JSON.stringify(movies, null, 4));
}
// createMovie(11, "Babe", "Comedy");

function editMovie(id, title, genre) {
  let movies = readMovie().filter((mv) => mv.id !== id);
  let movie = new Movie(id, title, genre);
  movies.push(movie)
  movies.sort((a, b) => a.id - b.id);
  fs.writeFileSync("./movies.json", JSON.stringify(movies, null, 4));
  console.log(movies);
}
// editMovie(2, "Ace Ventura 2", "Action");

function deleteMovie(id){
    let movies = readMovie().filter(mv=>mv.id!==id)
    fs.writeFileSync("./movies.json", JSON.stringify(movies, null, 4));
    console.log(movies);
}
deleteMovie(11)
