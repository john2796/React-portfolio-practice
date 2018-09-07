import React, { Component } from "react";

import { Grid, Cell } from "react-mdl";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png"
              alt=""
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                Html | Css | Javascript | React | React Native | NodeJS |
                Express | MongoDB
              </p>
              {/* Links to social medial and projects */}
              <div className="social-links">
                {/* Linked In */}
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Free Code Camp */}
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                {/* Youtube*/}
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
