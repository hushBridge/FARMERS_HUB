import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import {} from 'react-router-native';

//
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
//dummy components

const DashboardNew = () => <h2>DashboardNew</h2>;

//
class App extends Component {
  //
  componentDidMount() {
    this.props.fetchUser();
  }

  //
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/" component={Header} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/surveys/new" component={DashboardNew} />
            <Route exact path="/" component={Footer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//
export default connect(
  null,
  actions
)(App);
