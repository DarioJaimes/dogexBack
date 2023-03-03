const express = require('express');
var settings = require('./config/config');

const app = express();
const port = 3000;
const s3 = new settings.AWS.S3();


app.get('/api/dogex', (req, res) => {
  res.json({ success: true, message: 'Welcome to the best software team' });
});

app.get('/api/dogex/getFiles', (req, res) => {
  const params = {
    Bucket: settings.BUCKET
  };
    
  s3.listObjects(params, function(err, data) {
    if (err) {
        res.json({ success: false, message: err });
    } else {
        res.json({ success: true, message: data });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
