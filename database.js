const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = "tiberiusbaker";//process.env.MONGOUSER;
const password = "JourneyBeforeDestination";//process.env.MONGOPASSWORD;
const hostname = "startup.10aba6w.mongodb.net/";//process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const gameHistoryCollection = client.db('startup').collection('gamehistory');
const userCollection = client.db('startup').collection('user');

function getUser(email) {
  return userCollection.findOne({email: email});
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token.token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function recordGame(gameData) {
  gameHistoryCollection.insertOne(gameData);
}

function getGameHistory(body) {
  const query = {firstUser: body.email};
  const options = {};
  const cursor = gameHistoryCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  recordGame, 
  getGameHistory,
  getUser,
  getUserByToken,
  createUser,
};