import React, {useState} from 'react';
import clsx from 'clsx';
// import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HouseIcon from '@material-ui/icons/House';
import FaceIcon from '@material-ui/icons/Face';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Tooltip from '@material-ui/core/Tooltip';

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: 'flex',
    // width: '100%',
    marginLeft: '100px'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '36px',
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent: 'flex-end',
    color: theme.palette.text.secondary,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // height: '50px',
    // width:'0px',
    backgroundColor:  'rgba(9,17,52,1)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,    
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: 'rgba(9,17,52,1)'
    
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: 'rgba(9,17,52,1)'    
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // padding: theme.spacing(1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  icon: {
      color: 'white'
  }
}));


const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

export default function Home() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clickHandler = (event, text, index) => {
    //   alert(text)
      setSelectedIndex(index)
  }

  const iconSwitch = (icon) => {
    switch(icon) {
        case 'Home':
            return <HouseIcon className={classes.icon}/>
        case 'About':
            return <FaceIcon className={classes.icon}/>            
        case 'Portfolio':
            return <MenuBookIcon className={classes.icon}/>                
        case 'Contact':
            return <ContactMailIcon className={classes.icon}/>
        default:
            return <></>                                


    }
  }



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
          <Box mb={15}>
            <Paper className={classes.paper}>Let me create your corner of the internet</Paper>
          </Box>
        </Grid>  
      </Grid>

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
                  <Paper className={classes.paper1}>Let me create your corner of the internet</Paper>
        </Grid>  
      </Grid>      
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>Let me create your corner of the internet</Paper>
        </Grid>
        <Grid item xs={12}>          
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper1}>Let me create your corner of the internet</Paper>
        </Grid>         */}

      {/* </Grid> */}
      </div>


        {/* <main className={classes.content}>
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
        </main>    */}
        </>


    )
}
