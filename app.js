const express = require('express');
const app = express()

app.listen(3002,()=> console.log("Server Running..."));
app.set('view engine','ejs')
app.use(express.static('public')) // ara katmanlar
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index")

})