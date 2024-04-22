const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://tasgate13:9dFB5M0RvuEEsWQa@cluster0.hq75pvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to the MongoDB cluster");
        // Προχώρησε με τις ενέργειες που θέλεις να κάνεις με τη βάση δεδομένων εδώ
    } finally {
        await client.close();
    }
}

run().catch(console.error);


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

