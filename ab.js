// function text(callback){
//     setTimeout(()=>{
//     let data=[1,2,3,4,5];
//     callback(data)
//     },2000);
// }

// function multi(data0){
//     console.log(data0.map((item)=>item*2))
// }

// text(multi)

const promise=new Promise((resolve,reject)=>{
    const err=true;
    if(err){
        reject("something went wrong");
    }else{
        resolve("connected");
    }
});
// console.log(promise)

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})