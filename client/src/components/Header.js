import React, { Component } from "react";

//
class Header extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <h1 className="header center blue-grey-text text-lighten-2">
                Perfect.io
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  A modern responsive front-end framework Design
                </h5>
              </div>
              <div className="row center">
                <a
                  href="/auth/google"
                  id="download-button"
                  className="btn-large waves-effect waves-light grey lighten-1"
                >
                  Get Started
                </a>
              </div>
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src="cocoa-unsplash2.jpg" alt="Unsplashed background img 1" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">Speeds up development</h5>

                  <p className="light">
                    We did most of the heavy lifting for you to provide a
                    dynamic web app that incorporate our custom components.
                    Additionally, we refined animations and transitions to
                    provide a smoother user experience.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">User Experience Focused</h5>

                  <p className="light">
                    By utilizing elements and principles of perfect.io, we were
                    able to create a framework that incorporates components and
                    animations that provide more feedback to users.
                    Additionally, a single underlying responsive system across
                    all platforms allow for a more unified user experience.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">settings</i>
                  </h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">
                    We have provided detailed documentation as well as specific
                    code examples to help new users get started. We are also
                    always open to feedback and can answer any questions a user
                    may have about perfect io.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  A modern responsive front-end framework based on perfect.io
                  Design
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img
              src="eggsSleek-unsplash2.jpg"
              alt="Unsplashed background img 2"
            />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h2 className="center brown-text">
                  <i className="material-icons">contacts</i>
                </h2>
                <h3>
                  <i className="mdi-content-send brown-text"></i>
                </h3>
                <h4>Contact Us</h4>
                <p className="left-align light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                  tristique arcu, non consequat magna fermentum ac. Cras ut
                  ultricies eros. Maecenas eros justo, ullamcorper a sapien id,
                  viverra ultrices eros. Morbi sem neque, posuere et pretium
                  eget, bibendum sollicitudin lacus. Aliquam eleifend
                  sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet
                  semper molestie. Morbi massa odio, condimentum sed ipsum ac,
                  gravida ultrices erat. Nullam eget dignissim mauris, non
                  tristique erat. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  A modern responsive front-end framework based on perfect.io
                  Design
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src="grapes-unsplash2.jpg" alt="Unsplashed background img 3" />
          </div>
        </div>
      </div>
    );
  }
}
//
export default Header;
