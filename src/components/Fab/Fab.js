import React, { useState, useEffect } from "react";
import FloatingBtn from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { withStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
    root: {    
        display: 'inline-block',
        backgroundColor: '#8F7547',  
        color: 'white',
        textAlign: 'center',        
        position: 'fixed',
        bottom: '30px',
        right: '12px',
        zIndex: 1000,
        visibility: styledBy('visibility', {
            show: 'visible',
            hide: 'hidden'
        })
    }
};

const StyledButton = withStyles(styles)(({ classes, visibility, ...other }) => (
    <FloatingBtn 
        className={classes.root} {...other}
        aria-label="add">
        <ArrowUpwardIcon />
    </FloatingBtn>
));

export default function Fab() {
    const [visibility, setVisibility] = useState('hide');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        
        if (position > 100) {
            setVisibility('show');            
        }
        else {
            setVisibility('hide');                        
        }
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
    };    

    return (    
        <StyledButton
         onClick={handleClick}
         visibility={visibility}/>
    );
}