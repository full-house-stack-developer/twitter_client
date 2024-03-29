const keys = require("../config/keys");
const Twitter = require('twitter');

module.exports =  new Twitter({
    consumer_key: keys.TWITTER_CONSUMER_KEY,
    consumer_secret: keys.TWITTER_CONSUMER_SECRET,
    access_token_key: keys.TWITTER_ACCESS_TOKEN,
    access_token_secret: keys.TWITTER_TOKEN_SECRET
  });
