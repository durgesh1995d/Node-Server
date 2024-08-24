module.exports= middleware = (req, res, next)=>{
    if(!req.query.age){
        res.send("please Provide your age");
    }
    if(req.query.age<18){
        res.send("Access Denied");
    }
    else{
        next();
    }
}