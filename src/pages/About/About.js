import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import ReferenceCarousel from '../../components/ReferenceCarousel/ReferenceCarousel'
// import Data from "../../utils/referenceData.json";
import './about.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
    // display: 'flex',
    // width: '100%',
    marginLeft: '100px',
    backgroundColor: 'red'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // padding: theme.spacing(1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <>    

        {/* <div className={classes.toolbar} /> */}
        <div className={classes.root}>
        <Grid 
          container 
          xs={11} 
          sm={12} 
          spacing={3}
          justify="flex-start"
          direction="row"
          alignItems="center"
          >
          <Grid item xs={12} sm={8} md={7}>            
            <Box ml={15} mt={13} mb={4}> 
              <Paper elevation={0} className={classes.heading}>Let me create your unique spot on the internet!</Paper>
            </Box>
          </Grid>  
        </Grid>
        </div>

    </>
    )
}
