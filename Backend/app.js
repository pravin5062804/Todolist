const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const todoModel = require("./models/todo");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/test");

app.post("/add",async function(req,res){
    const task =req.body.task;
    let todo= await todoModel.create({
        task:task
    }).then(result =>res.json(result))
    .catch(err=>res.json(err))
})

app.get("/get", async (req, res) => {
  try {
    const todos = await todoModel.find()
    res.json(todos) 
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})


app.put("/update/:id",async function(req,res){
    let { id } = req.params   
    const update= await todoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put("/delete/:id",async function(req,res){
    let {id }= req.params
    const deltodo= todoModel.findByIdAndDelete({_id:id})
     .then(result=>res.json(result))
    .catch(err=>res.json(err))
    
})

app.listen(3000,function(err){
    console.log("runing on 3000")
})