import React, { Component } from "react";

import Main from "./components/Main";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header
            scroll
            className="header-color"
            title={
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "none"
                }}
              >
                Miranda
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contacts</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                John Miranda
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contacts</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              {/* this is the Main for all the Components  */}
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
