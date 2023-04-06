const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const gameHistoryCollection = client.db('startup').collection('gamehistory');

function recordGame(gameData) {
  gameHistoryCollection.insertOne(gameData);
}

function getGameHistory(body) {
  const query = {firstUser: body['firstUser']};
  const options = {
    limit: 10,
  }
  const cursor = gameHistoryCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {recordGame, getGameHistory};