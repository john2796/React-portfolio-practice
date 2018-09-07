import React from "react";

import { Grid, Cell, ProgressBar } from "react-mdl";

const Experience = props => {
  return (
    <Grid>
      <Cell col={12}>
        <div style={{ display: "flex" }}>
          {props.skills}
          {/* Simple Progress Bar */}
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={props.progress}
          />
        </div>
      </Cell>
    </Grid>
  );
};

export default Experience;
