let request = require("supertest");
let http = require("http");
let { app } = require("../index");
let { getAllGames, getGameById, getAllGenres, getGenreById } = require("../functions");


jest.mock("../functions", () => ({
  ...jest.requireActual("../functions"),
  getAllGames: jest.fn(),
  getGameById: jest.fn(),
  getAllGenres: jest.fn(),
  getGenreById: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("API Error Testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // Exercise 5: Test get all games with no games
  it("GET API /api/games should return 404 if games not found", async () => {
    getAllGames.mockReturnValue([]);
    let result = await request(server).get("/api/games");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No games found");
  });
  // Exercise 6: Test get game by non-existent ID
  it("GET API /api/games/:id should return 404 for non existent id", async () => {
    getGameById.mockReturnValue(null);
    let result = await request(server).get("/api/games/6");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("Game not found");
  });
  // Exercise 7: Test get all genres with no genres
  it("GET API /api/genres should return 404 if genres not found", async () => {
    getAllGenres.mockReturnValue([]);
    let result = await request(server).get("/api/genres");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No genres found");
  });
  // Exercise 8: Test get genre by non-existent ID
  it("GET API /api/genres/:id should return 404 if genre not found", async () => {
    getGenreById.mockReturnValue(null);
    let result = await request(server).get("/api/genres/5");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("Genre not found");
  });
})