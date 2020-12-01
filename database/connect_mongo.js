const mongoose = require("mongoose");

// config and constants

mongoose.Promise = global.Promise;

// Set up mongoose connection
const mongoDB =
  "mongodb+srv://shubham:10dulkar@cluster0.zyzm2.mongodb.net/FileManagerDB";

mongoose.connect(mongoDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on("connected", function () {
  console.log("Mongoose connection established with FileManager Database.");
});

// If the connection throws an error
db.on("error", function (err) {
  console.log("Mongoose connection failed with error: " + err);
});

// When the connection is disconnected
db.on("disconnected", function () {
  console.log("Mongoose default connection disconnected.");
});
