import React, {useState} from 'react';
import clsx from 'clsx';
// import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
    display: 'flex',
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
    <div>


        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          // style={{ background: 'transparent', boxShadow: 'none'}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon 
              // htmlColor='red'
              />
            </IconButton>
            <Typography variant="h6" noWrap>
              James L DeLeonardis
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon htmlColor='white'/>
              {/* {theme.direction === 'rtl' ? <ChevronRightIcon htmlColor='white'/> : <ChevronLeftIcon htmlColor='white'/>} */}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Home', 'About', 'Portfolio', 'Contact'].map((text, index) => (
              
              //see HtmlToolTip declaration above
              <HtmlTooltip     
              title={
                <>
                  <Typography color="inherit">Tooltip with HTML</Typography>
                  <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                  {"It's very engaging. Right?"} {text}
                </>
              }
              enterDelay={600}
              enterNextDelay={600} 
            >
  
              <ListItem 
                  button
                  key={text}
                  // onClick={() => setCollapsed(!collapsed)}>
                  onClick={(event) => clickHandler(event, text, index)}
                  selected={selectedIndex === index}
                  >
                  <ListItemIcon>{iconSwitch(text)}</ListItemIcon>             
                  <ListItemText primary={text} className={classes.icon}/>
              </ListItem>
  
              </HtmlTooltip>
            ))}
          </List>
          {/* <Divider /> */}
        </Drawer>
    </div>

    )
}
