/*window.onload = function() {
    document.getElementById('calculationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      
      fetch('http://localhost:3000/save-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        age : document.getElementById("Age")
        })
      })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    });
  };*/

const express = require('express')
const mongoose = require('mongoose')

const DbUrl = "mongodb://localhost:27017/YuNuDB"

const app = express()
mongoose.connect(DbUrl)

const conn = mongoose.connection;

conn.once('open', ()=>{
  console.log("SUCCESSFULLY DB CONNECT");
})

conn.on('error', ()=>{
  console.log("error to db");
  process.exit();
})

app.get('/home',(req,res)=>{
  res.send('<h1>YuNu DB</h1>')
})

app.get("/getUsers",(req,res)=>{
  res.json(UserModel.find())
})

app.listen(3001,()=>{console.log("Server is running...")})
