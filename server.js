'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello FS2025 DevOps Course! Es ist Donnerstagabend und ich (Lea) mache eine Anpassung am Code');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
