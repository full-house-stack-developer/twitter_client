import Header from "./Header";
import ListTweet from "./ListTweet";
import SendTweet from "./SendTweet";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { BACKEND_ENDPOINT } from "../config/const";

export default class HomePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      profileImageUrl: PropTypes.string,
      twitterId: PropTypes.string,
      screenName: PropTypes.string,
      _id: PropTypes.string
    })
  };

  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    // Fetch does not send cookies. So we added credentials: 'include'
    fetch(`http://${BACKEND_ENDPOINT}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    })
    .then(responseJson => {
      this.setState({
        authenticated: true,
        user: responseJson.user
      });
    })
    .catch(error => {
      this.setState({
        authenticated: false,
        error: "Failed to authenticate user"
      });
    });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <h1>Twitter client</h1>
          ) : (
            <div>
              <h2>Welcome {this.state.user.name}!</h2>
              <SendTweet/>
              <ListTweet/>
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
