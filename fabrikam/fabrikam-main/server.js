const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname})
});

app.listen(6969);
console.log("Started at 6969")