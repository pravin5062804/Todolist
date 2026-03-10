const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const todoModel=mongoose.model("todos",todoSchema);
module.exports=todoModel;