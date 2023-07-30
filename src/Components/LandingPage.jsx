// LandingPage.jsx
import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./SideBar";

function LandingPage({ children }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} md={2} lg={3} style={{ width: "100%", height: "100vh" }}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9} style={{ width: "100%", height: "100vh" }}>
        <div style={{ backgroundColor: "#fff" }}>{children}</div>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
