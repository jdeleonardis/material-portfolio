import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({

    chipContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),      
      },
      marginBottom: '10px',
      marginLeft: '8px',
      listStyle: 'none'
    }
  }));

export default function Chips(props) {
    const classes = useStyles();

    return (    
        <div className={classes.chipContainer}>
            {props.techUsed.map((tech) => (                                  
                <li key={tech}>
                    <Chip label={tech} size="small" variant="outlined" />                                
                </li>                
            ))}
        </div>
    );
}