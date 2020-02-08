import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h2 className="brown-text">
                <i className="material-icons">book</i>
              </h2>
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque id nunc nec volutpat. Etiam pellentesque tristique
                arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
                Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
                eros. Morbi sem neque, posuere et pretium eget, bibendum
                sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu
                mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi
                massa odio, condimentum sed ipsum ac, gravida ultrices erat.
                Nullam eget dignissim mauris, non tristique erat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae.
              </p>
            </div>
            <div className="col l3 s12">
              <h2 className=" brown-text">
                <i className="material-icons">settings</i>
              </h2>
              <h5 className="white-text">Settings</h5>
              <ul>
                <li>
                  <a className="white-text" href="/">
                    Placeholder
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Placeholder
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Placeholder
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Placeholder
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h2 className="brown-text">
                <i className="material-icons">link</i>
              </h2>
              <h5 className="white-text">Connect</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Telegram
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by{" "}
            <a className="brown-text text-lighten-3" href="/">
              HushBridge@perfect.io
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
