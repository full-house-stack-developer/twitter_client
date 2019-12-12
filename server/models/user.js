const mongoose = require("../db/mongodb");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
