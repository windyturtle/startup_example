const express = require('express');
const app = express();
const DB = require('./database.js');
let currUser = "";

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/setUser', async (req, res) => {
  this.currUser = req.body['user'];
  res.send(this.currUser);
})

apiRouter.get('/gamehistory', async (req, res) => {
  let gameHistory;
  gameHistory = await DB.getGameHistory(this.currUser);
  res.send(gameHistory);
});

apiRouter.post('/endgame', async (req, res) => {
  DB.recordGame(req.body);
  const gameHistory = await DB.getGameHistory(req.body);
  res.send(gameHistory);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});