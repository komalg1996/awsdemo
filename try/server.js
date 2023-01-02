const express =require('express');
const app=express();

app.get('/',function(req,res){
    res.send("hello");
});
app.get('/home',function(req,res){
    res.sendFile('/home.html',{root:__dirname})
});
app.listen (8080);
console.log("running at 8080");