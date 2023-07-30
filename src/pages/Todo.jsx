import React from "react";
import LandingPage from "../Components/LandingPage";
import ChatBox from "./ChatBox";

import { Grid, Typography, Divider } from "@mui/material";

const Todo = () => {
  return (
    <LandingPage>
      <div style={{ height: "100vh" }}>
        <Grid container spacing={2} p={3}>
          <Grid item xs={2}>
            <Typography
              className="hover-text"
              color="text.secondary"
              variant="h6"
              gutterBottom>
TODO            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <div style={{ marginTop: "200px" , color:'rgb(235 235 235 / 60%)'}}>
          <Typography variant="h1" gutterBottom>
            Coming Soon
          </Typography>
        </div>
        <div style={{ width: "30%", float: "right",position: 'relative' , marginTop:'150px' }}>
          <ChatBox/>
        </div>
      </div>
    </LandingPage>
  );
};

export default Todo;
