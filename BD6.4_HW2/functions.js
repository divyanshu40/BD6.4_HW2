let games = [
  { id: 1, title: 'The Legend of Zelda', genreId: 1 },
  { id: 2, title: 'Super Mario Bros', genreId: 2 },
];

let genres = [
  { id: 1, name: 'Action-Adventure' },
  { id: 2, name: 'Platformer' },
];
// function to get all games.
async function getAllGames() {
  return games;
}
// function to get game by id.
async function getGameById(id) {
  return games.find((game) => game.id === id);
}
// function to get all genres.
async function getAllGenres() {
  return genres;
}
// function to get genre by id.
async function getGenreById(id) {
  return genres.find((genre) => genre.id === id);
}

module.exports = { getAllGames, getGameById, getAllGenres, getGenreById };