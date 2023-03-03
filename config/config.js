const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIAWFQDZ64VTDPE3ZSC',
    secretAccessKey: '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'
});

module.exports = {
    AWS,
    BUCKET: "dogex"
}
