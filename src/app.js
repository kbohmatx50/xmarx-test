// src/app.js

const express = require('express');
const app = express();

// ✅ Example vulnerability (Code injection style / unsafe usage)
app.get('/user', (req, res) => {
    const name = req.query.name;

    // BAD: no validation
    res.send("Hello " + name);
});

// ✅ Another common issue example
const password = "hardcoded-password"; // flagged by scanners

app.listen(3000, () => console.log('Running'));
