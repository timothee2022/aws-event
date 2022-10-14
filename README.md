# LAB - Class 19

## Project: AWS: Events

### Author: Timothee Odushina
### Problem Domain  

Required Services
1. SNS Topic: pickup which will receive all pickup requests from vendors
2. SQS Queue (FIFO): packages which will contain all delivery requests from vendors, in order of receipt.
  * Subscribe this queue to the pickup topic so all pickups are ordered
3. SQS Queue (Standard) for each vendor (named for the vendor) which will contain all delivery notifications from the drivers

Operations
Vendors:
* Vendors will post “pickup” messages containing delivery information into the SNS pickup topic
    * { orderId: 1234, customer: "Jane Doe", vendorId: queueArn}
    * Note the queueArn – this refers to the AWS ‘arn’ of the vendor’s specific delivered queue
* Pickup requests should be moved into a FIFO queue called packages for the drivers automatically
    * (Make the packages queue a subscriber to the pickup topic)
* Vendors should separately subscribe to their personal SQS queue and periodically poll the queue to see delivery notifications

Drivers:
* Drivers will poll the SQS packages queue and retrieve only the next delivery order (message)
* After a time (e.g. 5 seconds), drivers will post a message to the Vendor specific SQS Queue using the queueArn specified in the order object

### Links and Resources

- [ci/cd](http://xyz.com) (GitHub Actions)
- [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable)

### Setup

#### `.env` requirements (where applicable)

i.e.

- `PORT` - Port Number
- `DATABASE_URL` - URL to the running Postgres instance/db

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/hello` - specific route to hit

#### Tests

- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

#### UML

Link to an image of the UML for your application and response to events