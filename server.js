const express = require('express');
const app =express();
const PORT = process.env.PORT||5000;
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.render("index");
})



app.listen(PORT,()=>console.log(`server running on ${PORT}`));