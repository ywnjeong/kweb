const express=require('express');
const app=express();
const port=3000;

const factorial=(n)=>{
    if (n===0||n===1){
        return 1;
    } else {
        return n*factorial(n-1);
    }};

app.get('/factorial',(req,res)=>{
    const number=req.query.number;
    if (number){
        res.redirect(`/factorial/${number}`);
    } else {
        res.send('No query parameters');
    }
});

app.get('/factorial/:number',(req,res)=>{
    const number=parseInt(req.params.number,10);
    if (isNaN(number)||number<0){
        res.send('Invalid input');
    } else {
        res.send(`The factorial is ${factorial(number)}`);
    }
});

app.listen(port,()=>console.log(`Server listening on port ${port}!`));