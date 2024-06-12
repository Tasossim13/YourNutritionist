const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Χρήση του cors middleware
app.use(express.static('public'));

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
