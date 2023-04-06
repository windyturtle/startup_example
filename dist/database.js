const {MongoClient} = require('mongodb');

const userName = "tiberiusbaker";//process.env.MONGOUSER;
const password = "JourneyBeforeDestination";//process.env.MONGOPASSWORD;
const hostname = "startup.10aba6w.mongodb.net/";//process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('users');

module.exports = {};