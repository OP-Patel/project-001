import express from "express";

const port = 3000; 
const app = express(); 
app.use(express.static("public"));

app.listen(port, function(){
    console.log("Server started on port 3000.");
});

app.get("/", (req, res)=>{
    res.render("index.html");
});