const router = require("express").Router();
const client = require("../config/twitter");

router.post("/", (req, res) => {
  if (req.user) {
    client.post('statuses/update', {status: req.body.status})
      .then(function (tweet) {
        res.json({
            success: true,
            message: "User has successfully sent tweet.",
            tweet: tweet
          });
      })
    .catch(function (error) {
      throw error;
    })
  }
});

router.get("/", (req, res) => {
  if (req.user) {
      client.get('statuses/user_timeline', function(error, tweets, response) {
        if (!error) {
          var tweetsInArray = []
          for(var i = 0; i < tweets.length; i++){
            var obj = {}
            obj.status = tweets[i].text
            obj.tweet_id = tweets[i].id_str
            tweetsInArray.push(obj)
          }
          res.json({
            tweets: tweetsInArray,
          });
        }
      });
  } else {
    res.json({
      tweets: []
    });
  }
});

router.delete("/", (req, res) => {
  if (req.user) {
    client.post(`statuses/destroy/${req.body.tweet_id}`, {id: req.body.tweet_id})
    .then(function (tweet) {
      res.json({
          success: true,
          message: "Tweet deleted.",
          user: req.user,
          cookies: req.cookies,
          tweet: tweet
        });
    })
    .catch(function (error) {
      res.json({
        success: false,
        message: "Something went wrong."
      });
    })
  }
});
  
module.exports = router;
