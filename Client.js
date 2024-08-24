const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnection() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('Toll');
    return collection = db.collection('Detail');
    // let res = await collection.findOne({TABLE: 'ENGINE=InnoDB'});
    // console.log(res)
}
module.exports= dbConnection;