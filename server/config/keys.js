// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: '',
  TWITTER_CONSUMER_SECRET: '',
  TWITTER_ACCESS_TOKEN: '',
  TWITTER_TOKEN_SECRET: ''
}

const MONGODB = {
  MONGODB_URI: 'mongodb://localhost:27017/twitter'
}

const CLIENT_HOME_PAGE = {
  CLIENT_HOME_PAGE_URL: 'http://localhost:3000'
}

const SESSION = {
  COOKIE_KEY: ''
}

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION,
  ...CLIENT_HOME_PAGE
}

module.exports = KEYS
