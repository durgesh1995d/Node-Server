const dbConnection = require('./Client') 

// const main = async () =>{
//     let data = await dbConnection();
//     data = await data.find({}).toArray();
//     console.log("user", data)
// }
// main()

// insert
// const inserts =async () =>{
//     let db= await dbConnection();
//     const result = await db.insertOne({
//         name: "datww",
//         price: 500
//     })
// }
// inserts()

// Update
const update=async ()=>{
    let db= await dbConnection();
    const result = await db.updateOne(
        {name: 'datww'},
        {$set: {price: 1000}}
    ) 
    console.log(result)
}
update()