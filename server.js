const express = require('express');
const path=require('path');
const app = express();
// console.log(__dirname)
const filePath = path.join(__dirname,'Html');
// console.log("dir name====>",filePath)
// app.use(express.static(filePath))  //Static file path

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
});


app.get('/users',(req,res)=>{
    const userData={
        name:'manager',
        country:'India',
        data: ['ta','djdf','fj'],
    }
    res.render('user',{userData})
});

// app.get('/',(req,res)=>{
//     res.sendFile(`${filePath}/index.html`);

// })

// app.get('/about',(req,res)=>{
//     res.sendFile(`${filePath}/hello.html`);
// })

// app.get('/',(req,res) =>{
//     res.send(`
//     <h2><a href='/about'>go to about page</a></h2>
//     <h1>Welcome Express</h1>`)
// })
// app.get('/about',(req,res)=>{
//     res.send('Wecom to about  ffjj')
// })


app.listen(3000);