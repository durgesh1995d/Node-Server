const mysql = require('mysql')
const express = require('express');
const winston = require('winston');
const { v4: uuid } = require('uuid');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.json', level: 'error' }),
      new winston.transports.File({ filename: 'combined.json' }),
    ],
  });

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'tollplaza'
});
connection.connect((err)=>{
    if(err){
        console.log("local= sql error===>",err)
    }else {
        console.log("data===sql Connection===")
    }
});

connection.query('Select * from test',(err, results)=>{
    if(err){
        console.log("data== err=>",err)

    }else
    console.log("data===>",results)
})
app.get('/',(req,res)=>{
    connection.query('Select * from tests',(err, results)=>{
       let requestIds=uuid();
        if(err){
            const mydate={
                requestID:requestIds,
                status:200,
                msg:"Something went wrong",
                data:err
            }
            logger.error({
                type:"Error",
                requestID:requestIds,
                msg:"Something went wrong",
                error:err
            })
            res.send(mydate)
        }else{
            const mydate={
                requestID:requestIds,
                status:200,
                msg:"success",
                data:results

            }
        res.send(mydate)
        }
    })
})

app.post('/create',(req,res)=>{
    const data=req.body
    connection.query('INSERT INTO test SET ?',data,(err, results)=>{
        let requestIds=uuid();
        if(err){
            const mydate={
                requestID:requestIds,
                status:200,
                msg:"Something went wrong",
                data:[]
            }
            logger.error({
                type:"Error",
                requestID:requestIds,
                msg:"Something went wrong",
                error:err
            })
            res.send(mydate)
    
        }else{
            const mydate={
                requestID:requestIds,
                status:200,
                msg:"success",
                data:results

            }
        res.send(mydate)
        }
    })
})

app.post('/login',(req,res)=>{
    const data=["ketna", "11:23:33",Date()]
    const user= {
        id:1,
        username:'Aman',
        email:'abc@test.com'
    }
    jwt.sign({user},"Fool",{expiresIn:'365d'}, (err,token)=>{
        res.send(token)
    })
    // connection.query('UPDATE test SET username=?,time=?,lastname=? WHERE id='+req.params.id,data,(err,results)=>{
    //     let requestIds=uuid();
    //     if(err){
    //         const mydate={
    //             requestID:requestIds,
    //             status:200,
    //             msg:"Something went wrong",
    //             data:results
    //         }
    //         res.send(mydate)
    
    //     }else{
    //         const mydate={
    //             requestID:requestIds,
    //             status:200,
    //             msg:"Update successful",
    //             data:results
    //         }
    //     res.send(mydate)
    //     }
    // })
})

app.post('/profile',verifyToken,(req,res)=>{
jwt.verify(req.token,"Fool",(err,authData)=>{
    if(err){
        res.send({result:"Invalid Token"})
    }else{
        res.send({
            msg: "Profile Accessed",
            authData
        })
    }
})
})
function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization'];
    if(typeof bearerToken!== 'undefined'){
      const bearer = bearerToken.split(" ");
      const token= bearer[1];
      req.token=token;
      next();
    }else{
        res.send({
            result:'Token is not valid'
        })
    }
}

app.post('/create',(req,res)=>{
    const data=req.body
    connection.query('INSERT INTO test SET ?',data,(err, results)=>{
        let requestIds=uuid();
        if(err){
            const mydate={
                requestID:requestIds,
                status:200,
                msg:"Something went wrong",
                data:[]
            }
            logger.error({
                type:"Error",
                requestID:requestIds,
                msg:"Something went wrong",
                error:err
            })
            res.send(mydate)
    
        }else{
            const mydate={
                requestID:requestIds,
                status:200,
                msg:"success",
                data:results

            }
        res.send(mydate)
        }
    })
})


app.listen(3000)