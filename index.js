const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

//Get board
/*apiRouter.get('/boards', (_req, res) => {
    res.send(board);
});


//Update board
apiRouter.post('/board', (_req, res) => {
    board = updateBoard(_req.body, board);
    res.send(board);
})*/

app._router.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
    console.log('Listening on port ${port}');
});