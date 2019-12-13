import React, { Component } from "react";
import { BACKEND_ENDPOINT } from "../config/const";
import RemoveTweet from "./RemoveTweet";

export default class ListTweet extends Component {

  state = {
    tweets: [],
    error: false,
  };

  componentDidMount() {
    // Fetch does not send cookies. So we added credentials: 'include'
    fetch(`http://${BACKEND_ENDPOINT}/tweets`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      this.setState({
        error: false,
        tweets: Array.from(responseJson.tweets)
      });
    })
    .catch(error => {
      this.setState({
        error: true,
      });
    });
  }

  render() {
    const { error, tweets } = this.state;
    return (
    <div>
        {error ? (
        <h1>Error getting tweets.</h1>
        ) : (
        <div>
            <ul>
                {tweets.map((value, index) => {
                    return (
                        <RemoveTweet key={index} status={value.status} tweet_id={value.tweet_id}/>
                      );
                })}
            </ul>
        </div>
        )}
    </div>
    );
  }
}
