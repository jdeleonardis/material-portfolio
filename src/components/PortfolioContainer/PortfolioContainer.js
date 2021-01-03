import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';


  const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
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
                        {/* <a href="https://espn.com" rel="noopener noreferrer" target="_blank" className={classes.cardButton} role="button">Deployed</a> */}
                        <a href="https://espn.com" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>
                        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
          {/* deployed and git */}
        Delete 
      </Button>
      </a>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
                    </Card>          
                </Grid>
            ))}
        </Grid>
    );
}