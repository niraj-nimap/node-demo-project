const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json({
        message: "Node.js App Running Successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});