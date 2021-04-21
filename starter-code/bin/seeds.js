const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

/* const celebrities = [
  {
    name: "Mário Sousa",
    occupation: "Future Web Developer",
    catchPhrase: "Yada yada"
  },
  {
    name: "Patrícia Marques",
    occupation: "Ex-nurse",
    catchPhrase: "I got a question!"
  },
  {
    name: "Venilde Sousa",
    occupation: "Full time mom",
    catchPhrase: "Mário Gabriel!!!"
  },
]; */

const movies = [
  {
    title: "RuPaul's Drag Race",
    genre: ["Dramaaaaaaaaa", "Queer", "Comedy"],
    plot: "Drama queens on the loose",
  },
  {
    title: "Drag Race All Stars",
    genre: ["Fashion Extravaganza"],
    plot: "Battle Roayle amongst the all time stars queens",
  },
  {
    title: "The Reunion",
    genre: ["Queer", "Talk", "Hila-la-la-rious"],
    plot: "Queens spilling the tea",
  },
];
/* 
Celebrity.create(celebrities)
  .then((celebrities) => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((e) =>
    console.log(
      `An error occurred while creating celebrities from the DB: ${e}`
    )
  ); */

Movie.create(movies)
  .then((movies) => {
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  })
  .catch((e) =>
    console.log(`An error occurred while creating movies from the DB: ${e}`)
  );
