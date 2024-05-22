const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost:27017/yourNutritionistDataB');


const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
  calories: Number
});

const recipeModel = mongoose.model("recipes",recipeSchema)


app.get("/recipes",(req,res)=>{
  recipeModel.find({}).then(function(recipes){
    res.json(recipes)
  }).catch(function(err){
    console.log(err)
  });
})

app.listen(3001,()=>{
  console.log("server is running.")
})
