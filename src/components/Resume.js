import React, { Component } from "react";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import { Grid, Cell } from "react-mdl";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png"
                alt="avatar"
                style={{ height: 250 }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>John Benedict Miranda</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis perspiciatis esse architecto repellat? Laboriosam
              quibusdam maxime voluptas tempore, sequi sapiente rem explicabo
              quod dicta minima saepe eaque. Harum, quia aperiam.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 341-1231</p>
            <h5>Email</h5>
            <p>someone@yahoo.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              endYear={2006}
              startYear={2012}
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis perspiciatis esse architecto repellat? Laboriosam
            quibusdam maxime voluptas tempore, sequi sapiente rem explicabo
            quod dicta minima saepe eaque. Harum, quia aperiam."
              schoolName="My University"
            />

            <Education
              endYear={2006}
              startYear={2012}
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis perspiciatis esse architecto repellat? Laboriosam
            quibusdam maxime voluptas tempore, sequi sapiente rem explicabo
            quod dicta minima saepe eaque. Harum, quia aperiam."
              schoolName="My University"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2122}
              jobName="first Job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis perspiciatis esse architecto repellat? Laboriosam
            quibusdam maxime voluptas tempore, sequi sapiente rem explicabo
            quod dicta minima saepe eaque. Harum, quia aperiam"
            />

            <Experience
              startYear={2209}
              endYear={2002}
              jobName="Second Job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis perspiciatis esse architecto repellat? Laboriosam
            quibusdam maxime voluptas tempore, sequi sapiente rem explicabo
            quod dicta minima saepe eaque. Harum, quia aperiam"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skills="React" progress={40} />
            <Skills skills="Html" progress={95} />
            <Skills skills="Css" progress={80} />
            <Skills skills="Javascript" progress={50} />
            <Skills skills="NodeJs" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
