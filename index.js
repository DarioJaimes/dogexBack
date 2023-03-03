const express = require('express');

const app = express();
const port = 3000;


app.get('/api/dogex', (req, res) => {
  res.json({ success: true, message: 'Welcome to the best software team' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
