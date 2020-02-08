import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navigation extends Component {
  //
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">log out</a>
          </li>
        );
    }
  }
  //
  render() {
    return (
      <nav className="blue-grey lighten-3" role="navigation">
        <div className="nav-wrapper  container">
          <Link
            to={this.props.user ? "/Dashboard" : "/"}
            id="logo-container"
            className="brand-logo grey-text text-lighten-5"
          >
            logo
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Hub</a>
            </li>
            {this.renderContent()}
          </ul>

          <ul id="nav-mobile" className="sidenav grey lighten-1">
            {this.renderContent()}
            <li>
              <a href="/">Hub</a>
            </li>
          </ul>
          <a href="/#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

//
export default connect(mapStateToProps)(Navigation);
