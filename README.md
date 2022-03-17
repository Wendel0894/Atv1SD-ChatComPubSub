# Mini - Project I

Chat with Pub/Sub.

## Technologies:

* `Redis;`
* `Express;`
* `Dotenv;`
* `Nodemon.`

## Requisites:
The objective of this mini-project is to create a chat system using a Publisher/Subscriber mechanism.

* ` The user must enter his username (no password) and connect to the messaging engine and from then on, send and receive messages from other chat participants;`

* `The only condition for the chat to be active is that the messaging engine is active;`

* `Choose any messaging service, for example Redis, Kafka, RabbitMQ (or any other message broker);`

* `Users can enter and exit the message flow at any time without their entry/exit being notified, this will facilitate implementation.`


# Running the Project:


## Redis
To start the Redis container in docker run the file run.sh:

### Grant execute permission to the .sh file:
* `chmod +x run.sh`

### Finally to run the Redis Docker Container:
* `sudo ./run.sh`


## Back-end
To run the code, go to the project's backend directory, enter the src folder and run the following commands:

### Install requisites:
* `yarn install`

### Finally run it:
* `yarn start`

### Access the APP in the browser:
http://localhost:3000