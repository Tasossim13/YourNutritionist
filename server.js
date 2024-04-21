const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Middleware για την ανάλυση JSON bodies
app.use(bodyParser.json());

// Δημιουργία POST endpoint
app.post('/save-name', (req, res) => {
    const { weight, height, ageData, gender } = req.body;

    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Age:', ageData);    
    console.log('Gender:', gender);

  // Επιστροφή απόκρισης
  res.status(200).json({message: 'Data received'});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




