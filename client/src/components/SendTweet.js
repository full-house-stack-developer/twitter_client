import React, { Component } from "react";
import { BACKEND_ENDPOINT } from "../config/const";

export default class SendTweet extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
        fetch(`http://${BACKEND_ENDPOINT}/tweets`, {
            method: 'POST',
            credentials: "include",
            headers: {
               Accept: "application/json",
              'Content-Type': 'application/json',
              "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                status: this.state.value,
            })
        })
        .then(response => {
            alert('The tweet has been send.');
            window.location.reload();
        })
        .catch(error => {
            alert('The tweet cound not be sent. Please try again later.');
            console.error(error);
            throw error;
        });
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Send tweet:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
