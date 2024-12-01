const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server running at http://localhost:3002`);
});

app.get('/Test', (req, res) => {
    res.send('This is a test response from the express server');
});