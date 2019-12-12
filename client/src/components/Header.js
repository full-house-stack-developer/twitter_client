import PropTypes from "prop-types";
import React, { Component } from "react";
import { BACKEND_ENDPOINT } from "../config/const";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu">
        {authenticated ? (
          <li onClick={this._handleLogoutClick}>Logout</li>
        ) : (
          <li onClick={this._handleSignInClick}>Login</li>
        )}
      </ul>
    );
  }

  _handleSignInClick = () => {
    window.open(`http://${BACKEND_ENDPOINT}/auth/twitter`, "_self");
  };

  _handleLogoutClick = () => {
    window.open(`http://${BACKEND_ENDPOINT}/auth/logout`, "_self");
    this.props.handleNotAuthenticated();
  };
}
