const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;
const path = require("path");
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));
 const viewPath = path.join(__dirname,"/views")
app.set('view engine', 'ejs')
app.set("views",viewPath)
app.get("/",(req,res) =>{
    res.render("index");
});

app.listen(port,()=>{
    console.log("server is running on "+port)
})
