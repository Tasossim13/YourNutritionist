const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Σύνδεση στη βάση δεδομένων MongoDB τοπικά
const mongoUri = 'mongodb://localhost:27017/yourNutritionistDataB';
mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Παράδειγμα μοντέλου συνταγής
const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
  calories: Number
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Διαδρομές API
app.get('/recipes', (req, res) => {
    Recipe.find({}, (err, recipes) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log(db.recipes.find({}));
        res.json(recipes);
      }
    });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

