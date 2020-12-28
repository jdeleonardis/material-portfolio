import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ReferenceCarousel from '../../components/ReferenceCarousel/ReferenceCarousel'
import Data from "../../utils/referenceData.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: 'flex',
    // width: '100%',
    marginLeft: '100px'
  },
  heading: {
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '36px',
    color: 'white',
    background: 'transparent'
  },
  subheading: {
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '28px',
    color: 'white',
    background: 'transparent'
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent: 'flex-end',
    color: theme.palette.text.secondary,
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
      <div className={classes.toolbar} />
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
          <Grid item xs={12} sm={8} md={6}>
            <Box mb={4}>
              <Paper elevation={0} className={classes.heading}>Let me create your corner of the internet</Paper>
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
          <Grid item xs={12} sm={8} md={6}>
            <Box mb={15}>
              <Paper elevation={0} className={classes.subheading}>I am a Front End Developer dedicated to efficient, mobile-responsive, and interesting online user experiences.</Paper>
            </Box>
          </Grid>  
        </Grid>      

        {/* <ReferenceCarousel/>          */}

        <Grid 
          container 
          xs={11} 
          sm={12} 
          spacing={3}
          justify="flex-end"
          direction="row"
          alignItems="center"
          >
          <Grid item xs={6}>
            <ReferenceCarousel
              data={data}
            />            
          </Grid>  
        </Grid>      
      </div>
    </>


        /* <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </main>    */



    )
}
