import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Chip from '@material-ui/core/Chip';

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
    chipContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),      
      },
      marginBottom: '10px',
      listStyle: 'none'
    }
  }));

export default function PortfolioContainer(props) {

    const classes = useStyles();

    const projectArray = props.data.results.filter(project =>    
        project.type === props.type    
    );

    return (
        <Grid container spacing={3} style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '10px', marginBottom: '10px'}}>
            {projectArray.map(project => (
                <Grid key={project.id} item xs={props.xs} md={props.md}>
                    <Card style={{boxShadow: '15px 15px 15px #5A674F'}}>         
                        <CardMedia
                        style= {{height: '200px', width: '100%', objectFit: 'contain'}}
                        component="img"                        
                        src={require(`../../images/modified/${project.imgLocation}`).default}
                        title={project.appName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.appName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.description}                            
                            </Typography>
                        </CardContent>
                        <div className={classes.chipContainer}>
                        {project.techUsed.map((tech) => {                          
                            return (
                              <li key={tech}>
                                <Chip label={tech} size="small" variant="outlined" />                                
                              </li>
                            );
                          })}
                        </div>
                        <a href={project.deployedAddress} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>
                          <Button
                          variant="contained"                          
                          className={classes.buttonGreen}          
                          startIcon={<ArrowForwardIosIcon />}
                          >
                            Deployed 
                          </Button>
                        </a>      
                        <a href={project.repoAddress} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>                        
                          <Button
                            variant="contained"                            
                            className={classes.buttonBrown}                           
                          >
                            <FontAwesomeIcon icon={faGithub} style={{marginRight: '12px'}}/>
                            GitHub
                          </Button>
                        </a>
                    </Card>          
                </Grid>
            ))}
        </Grid>
    );
}