const express =require('express');

const app =express();
const middleware=require('./middleware');
 
const routes= express.Router();
// app.use(middleware);
routes.use(middleware);

app.get('/',(req,res)=>{
    res.send('Welcome Server2')
})

// app.get('/login',middleware,(req,res)=>{
//     res.send('Login Page')
// })

routes.get('/login',(req,res)=>{
    res.send('Login Page')
})

app.listen(3000);
