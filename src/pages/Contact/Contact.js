import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    // color: theme.palette.text.secondary,
    fontFamily: "Roboto"
  },
  toolbar: {
    // display: 'flex',
    // display: 'inline-block',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    height: '200px'
    // padding: theme.spacing(0, 1),
    // padding: theme.spacing(1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  }
};

export default function Contact() {
  return (

  <div style={{marginTop: '60px', marginLeft: '100px', marginRight: '40px'}}>

CONTACT
  
<Grid container className={classes.root} spacing={3} style={{paddingLeft: '30px', paddingRight: '30px'}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
      </div>

  );
}