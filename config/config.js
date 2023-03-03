const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.KEY_SECRET
});

module.exports = {
    AWS,
    BUCKET: "dogex"
}