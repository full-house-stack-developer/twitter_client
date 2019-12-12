const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const port = 4000;
const passport = require("passport");
const passportSetup = require("./config/passport");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const tweetRoutes = require("./routes/tweet");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const bodyParser = require('body-parser');

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: keys.CLIENT_HOME_PAGE_URL, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// set up routes
app.use("/auth", authRoutes);
app.use("/tweets", tweetRoutes);

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
