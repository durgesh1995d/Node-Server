// const fs = require('fs');
// console.log("11 22");
// fs.writeFileSync("hello.txt","Welcome to Node");
// fs.appendFileSync('hello.txt','\n Data Test');
// let con= fs.readFileSync("hello.txt").toString();
// console.log("File Data==> ",con)
// fs.readdir('./',function(err,file){
//     if(err) console.log(err);
//     else console.log(file);
// })

// const { Socket } = require('dgram');
const http=require('http');
// const sever=http.createServer();
 
// sever.on('connection',(socket)=>{
//     console.log("connecting to socket");
// })

// console.log("running server");

const server =http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.writeHead(200,{
            'Content-Type': 'application/json',
            'myHeader': "Toll Plaza"
        })
    res.write('hello wellcol Welcome');
    res.end();
    }
    if(req.url==='/product'){
        res.end(JSON.stringify([1,2,3]))
    }
})

server.listen(3000)