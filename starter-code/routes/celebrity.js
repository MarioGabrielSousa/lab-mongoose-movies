const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

router.get("/celebrities", async (req, res) => {
  try {
    const celebritiesFromDB = await Celebrity.find();
    res.render("celebrities/index", { celebritiesFromDB });
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.get("/celebrities/new", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.render("celebrities/new", { allMovies });
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.post("/celebrities/new", async (req, res) => {
  try {
    const { name, movie, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, movie, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.get("/celebrities/:id", async (req, res) => {
  try {
    const celebrityId = req.params.id;
    const celebrity = await Celebrity.findById(celebrityId).populate("movies");//nome do field
    res.render("celebrities/show", { celebrity });
  } catch (e) {
    res.render("error");
    console.log(`Gurl, you dead: ${e}`);
  }
});

router.post("/celebrities/:id/delete", async (req, res) => {
  try {
    const celebrityId = req.params.id;
    await Celebrity.findByIdAndDelete(celebrityId);
    res.redirect("/celebrities");
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

module.exports = router;
