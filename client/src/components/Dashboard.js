import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper grey lighten-5">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="search for contents here..."
                  required
                />
                <label className="label-icon" for="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <div className="row">
          <div className="col s12 m3">
            {" "}
            <h3>categories..</h3>
            <p className="light category">
              We have provided a detailed section in settings to help new users
              get started. We are also always open to feedback and can answer
              any questions a user may have about perfect io.
            </p>
          </div>
          <div className="col s12 m9">
            <h1 className="center ">Welcome!</h1>
            <p className="left-align light center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque id nunc nec volutpat. Etiam pellentesque tristique
              arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
              Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
              eros. Morbi sem neque, posuere et pretium eget, bibendum
              sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis
              nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa
              odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget
              dignissim mauris, non tristique erat. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae;
            </p>
          </div>
        </div>

        <div className="fixed-action-btn">
          <a href="/" className="btn-floating btn-large red pulse">
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li>
              <a href="/" className="btn-floating red">
                <i className="material-icons">insert_chart</i>
              </a>
            </li>
            <li>
              <a href="/" className="btn-floating yellow darken-1">
                <i className="material-icons">format_quote</i>
              </a>
            </li>
            <li>
              <a href="/" className="btn-floating green">
                <i className="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a href="/" className="btn-floating blue">
                <i className="material-icons">attach_file</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
