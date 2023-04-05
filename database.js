const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('users');

function putBoard(user1, user2, board) {
    let user = {firstUser: user1, secondUser: user2, board: board};
    userCollection.insertOne(user);
}

function getBoard(user1, user2) {
    const query = {firstUser: user1, secondUser: user2};
    const options = {};
    let cursorArray = userCollection.find(query, options).toArray();
    if(cursorArray === [] || cursorArray === null) {
        query = {firstUser: user2, secondUser: user1};
        cursorArray = userCollection.find(query, options);
    }
    if(cursorArray === [] || cursorArray === null) {
        cursorArray = localStorage.getItem('currBoard').toArray();
    }
    return cursorArray;
}



module.exports = {putBoard, getBoard};