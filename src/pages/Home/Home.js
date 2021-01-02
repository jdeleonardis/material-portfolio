import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ReferenceCarousel from '../../components/ReferenceCarousel/ReferenceCarousel'
import Data from "../../utils/referenceData.json";
import './home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: 'flex',
    // width: '100%',
    marginLeft: '100px'
  },
  heading: {
    // fontFamily: 'Macondo Swash Caps, cursive',
    textShadow: '1px 1px 2px black, 5px 5px 5px #5A674F, 0 0 5px #5A674F',
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '50px',
    color: 'white',
    background: 'transparent',
    marginTop: '-40px'
  },
  subheading: {
    textShadow: '1px 1px 2px black, 1px 1px 2px black',    
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '28px',
    color: 'white',
    background: 'transparent'
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

export default function Home() {
  const classes = useStyles();

  const [data] = useState({Data});  

  return (
    <>
      {/* <div className={classes.toolbar} /> */}
      <div className={classes.root}>
        <div className="homeContainer">
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
            <Box ml={15} mb={5}>
              <Paper elevation={0} className={classes.subheading}>I am a Front End Developer dedicated to efficient, mobile responsive, and interesting online user experiences.</Paper>
            </Box>
          </Grid>  
        </Grid>      

        <Grid 
          container           
          xs={12}           
          spacing={3}
          justify="flex-start"          
          direction="row"
          alignItems="center"
          >
          <Grid item xs={2} md={1} xl={0}> 

            </Grid>
          {/* <Grid item xs={11} sm={11} lg={8}> */}
          <Grid item xs={10} md={11} lg={7}>
            <ReferenceCarousel
              data={data}
            />            
          </Grid>  
        </Grid>      
        </div>
      </div>
    </>
    )
}
