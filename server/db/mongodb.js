const keys = require("../config/keys");
const mongoose = require('mongoose')

class Mongoose {
  constructor () {
    mongoose.connect(keys.MONGODB_URI, {
      // these parameters will change in production
      useNewUrlParser: true,
      autoIndex: false, // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
    })
    return mongoose
  }
}

module.exports = new Mongoose()
