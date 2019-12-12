import React from "react";
import { BACKEND_ENDPOINT } from "../config/const";

export default class RemoveTweet extends React.Component {
    constructor(props) {
        super(props);
        this.onClickDelete = this.onClickDelete.bind(this);
    }
    onClickDelete() {
        fetch(`http://${BACKEND_ENDPOINT}/tweets`, {
            method: 'DELETE',
            credentials: "include",
            headers: {
               Accept: "application/json",
              'Content-Type': 'application/json',
              "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                tweet_id: this.props.tweet_id,
            })
        })
        .then(response => {
            alert('The tweet has been deleted.');
            window.location.reload();
        })
        .catch(error => {
            alert('The tweet cound not be deleted. Please try again later.');
            console.error(error);
            throw error;
        });
    }
    render () {
        return(
        <li>
            <div>
            <li>{this.props.status}</li>
            <button type="button"
                onClick={this.onClickDelete}>Delete</button>
            </div>
        </li>     
        );
    }
}