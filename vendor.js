'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ redion: 'us-east-2' });

const sns = new AWS.SNS();
const topic = 'arn:aws:sns:us-east-2:619093072103:Package_pickup';

const message = {
  orderId: '1234',
  customer: 'Jane Doe',
  vendorId: '1345',
}

sns.publish(message, (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
})