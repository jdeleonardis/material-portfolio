import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chips from '../Chips/Chips'
import ProjectButtons from '../ProjectButtons/ProjectButtons'

export default function PortfolioContainer(props) {

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
                            <Typography variant="body2" component="p">
                                {project.description}                            
                            </Typography>
                        </CardContent>
                        
                        <Chips 
                          techUsed={project.techUsed}
                        />

                        <ProjectButtons
                          deployedAddress={project.deployedAddress}
                          repoAddress={project.repoAddress}
                        />
                    </Card>          
                </Grid>
            ))}
        </Grid>
    );
}