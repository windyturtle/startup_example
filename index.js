const express = require('express');
const app = express();
const DB = require('/database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);


apiRouter.get('/localBoard', async (_req, res) => {
    let board = getBoard();
    res.send(board);
});


apiRouter.post('/board', async (_req, res) => {
    let board = putBoard(_req.headers["firstUser"], _req.headers["secondUser"], _req.body);
    res.send(board[2]);
})

app._router.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
    console.log('Listening on port ${port}');
});