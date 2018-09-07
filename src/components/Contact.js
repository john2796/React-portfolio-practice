import React, { Component } from "react";

import { Grid, Cell, ListItemContent, ListItem, List } from "react-mdl";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>John Benedict Miranda</h2>
            <img
              src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png"
              alt="avatar"
              style={{ height: 250 }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "2em" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              corporis fuga beatae Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Odit aliquid eum quisquam
              at, vel accusamus aspernatur reiciendis nemo deleniti excepturi
              ducimus repellendus..
            </p>
          </Cell>
          {/* right side of page */}
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            {/* Contact List */}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: 25, fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 546-1234
                  </ListItemContent>
                </ListItem>
              </List>

              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: 25, fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 546-1234
                  </ListItemContent>
                </ListItem>
              </List>

              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: 25, fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@yahoo.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
