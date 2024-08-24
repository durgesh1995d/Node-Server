const express = require('express');
const mongodb = require('mongodb');
const dbConnection = require('./Client');
const { name } = require('ejs');

const app = express();
app.use(express.json());

//* Get Method
app.get('/', async (req, res) => {
    let data = await dbConnection();
    data = await data.find({}).toArray();
    res.send(data)

})

//* Post Method
app.post('/addDetail', async (req, res) => {
    console.log(req.body);
    let data = await dbConnection();
    data = await data.insertOne(req.body)
    res.send(data)
})

// * Put Method
app.put('/update/:name', async (req, res) => {
    let data = await dbConnection();
    data = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    res.send(data)
})

//* Delete Method
app.delete('/deleteDetail/:id', async (req, res) => {
    let data = await dbConnection();
    data = data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.send(data)
})
app.listen(3000);