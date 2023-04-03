function login() {
    const { MongoClient } = require('mongodb');

    const userName = process.env.MONGOUSER;
    const password = process.env.MONGOPASSWORD;
    const hostname = process.env.MONGOHOSTNAME;

    if(!userName) {
        throw Error("Database not configured. Set environment variables");
    }

    const uri = 'mongodb+srv://${userName}:${password}@${hostname}';

    const client = new MongoClient(uri);

    let collection = client.db('startup').collection('user');

    collection.insertOne(document.getElementById("desiredName").textContent);
    window.location.href="online.html";
}