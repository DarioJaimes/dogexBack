const express = require('express');

const app = express();
const port = 3000;


app.get('/api/dogex', (req, res) => {
  const users = [
    { success: true, message: 'Welcome to the best software team' },
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
