const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies/create", (req, res) => {
  res.render("movies-create");
});

router.post("/movies/create", async (req, res) => {
  try {
  const { title, genre, plot } = req.body;
  await Movie.create({
    title,
    genre,
    plot,
  });
  res.redirect("/celebrities");
} catch (e) {
    res.render("error");
    console.log(`Gurl, you dead: ${e}`);
  }
});

module.exports = router;
