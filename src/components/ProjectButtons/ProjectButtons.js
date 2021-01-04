import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttonGreen: {
        margin: theme.spacing(1),
        color: 'white',
        backgroundColor: '#5A674F'
    },  
    buttonBrown: {
        margin: theme.spacing(1),
        color: 'white',
        backgroundColor: '#8F7547'
    },
    buttonContainer: {
        marginLeft: '8px', 
        marginBottom: '8px'
    }
}));

export default function ProjectButtons(props) {
    const classes = useStyles();

    return (    
        <div className={classes.buttonContainer}>
            <a href={props.deployedAddress} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>
            <Button
            variant="contained"                          
            className={classes.buttonGreen}          
            startIcon={<ArrowForwardIosIcon />}
            >
            Deployed 
            </Button>
        </a>      
        <a href={props.repoAddress} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>                        
            <Button
            variant="contained"                            
            className={classes.buttonBrown}                           
            >
            <FontAwesomeIcon icon={faGithub} style={{marginRight: '12px'}}/>
            GitHub
            </Button>
        </a>
      </div>
    );
}