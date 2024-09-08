let express = require("express");
let { getAllGames, getGameById, getAllGenres, getGenreById } = require("./functions");
let app = express();
app.use(express.json());

// Exercise 1: Get All Games
app.get("/api/games", async (req, res) => {
  try {
    let result = await getAllGames();
    if (result.length === 0) {
      return res.status(404).json({ error: "No games found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 2: Get Game by ID
app .get("/api/games/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getGameById();
    if (! result) {
      return res.status(404).json({ error: "Game not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 3: Get All Genres
app.get("/api/genres", async (req, res) => {
  try {
    let result = await getAllGenres();
    if (result.length === 0) {
      return res.status(404).json({ error: "No genres found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 4: Get Genre by ID
app.get("/api/genres/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getGenreById(id);
    if (! result) {
      return res.status(404).json({ error: "Genre not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
module.exports = { app };