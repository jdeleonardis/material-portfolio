import React from "react";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import './about.css'

const classes = {
  root: {
    flexGrow: 1
  }
};

const pageStyles = {
  img: {
    height: 315,
    width: 275
  },
  leftBox: {
    float: "left",
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20
  },
  paragraph: {
    fontSize: 15
  }  
};

export default function About() {
  return (

  <div style={{marginTop: '60px', marginLeft: '100px', marginRight: '40px'}}>
    ABOUT
      <Grid container className={classes.root} spacing={3} style={{paddingLeft: '30px', paddingRight: '30px'}}>
      <Grid item xs={12}>
            <div style={pageStyles.leftBox}>                                    
                <img src={require('../../images/photo0.jpg').default} className="img" alt="Responsive" style={pageStyles.img}></img>       
                <br></br>
                jdeleonardis13@gmail.com
                <br></br>
                919-599-8859
                {/* <br></br>
                <a href="https://drive.google.com/drive/folders/1EoBzBeLuYyZrhAZyqMd0qmbAl8GLv7qL" target="_blank" rel="noopener noreferrer">Resume</a> */}
            </div>
      {/* </Grid>
      <Grid item xs={9}> */}
            <div>
                <p style={pageStyles.paragraph}>Hello!  My name is Jay DeLeonardis and I am a web developer from Hillsborough, North Carolina.  I have spent nearly 25 years as a software developer, 
                    but have recently reimagined my career by enrolling in and completing a Full Stack Developer program at the University of North Carolina.
                    This program is an intensive class covering all aspects of web development including HTML, CSS, Javascript, React.js (which this portfolio is written in, along with MaterialUI), 
                    JQuery, AJAX, Express, Node, MySQL, MongoDB, as well as using GitHub for project repositories and source control.
                </p>
                <p style={pageStyles.paragraph}>After completing the Full Stack program, I began creating websites in a freelance capacity to maintain my skills. Additionally, I have
                begun working at Our National Convention as a Front End Developer intern, writing front end code using React and React-Bootstrap to create websites based on the company's UI/UX designers.
                </p>                
                <p style={pageStyles.paragraph}>
                    I graduated from the University of South Carolina in 1996 with a double major in Manangement Information Systems and Management. While enrolled
                    in college, I worked full time as an operations analyst in a data security department at South Carolina Electric and Gas.  Shortly after graduation,
                    I moved to Dallas, Texas and began my career as a contract programmer for Software Architects.  In 1999, my family and I moved to North Carolina, and 
                    I have spent the remainder of my career in the health care industry.
                </p>
                <p style={pageStyles.paragraph}>
                    I am fluent in several object oriented programming languages.  I spent many years as a Powerbuilder developer at an Identity laboratory
                    at Laboratory Corporation of America.  While at Labcorp, I was responsible for converting several applications to C#. I have also worked on many different databases
                    built using SQL Server and Oracle.
                </p>        
                <p style={pageStyles.paragraph}>
                    As a member of many different programming teams, I am very proud of my ability to work in a small group of developers, software testers, and especially end users.
                    I am always ready to lend a helping hand to less experienced programmers, and I feel that I make a very good teammate.  I am a strong listener, and I am always very 
                    cognizant of needs, problems, and challenges that end users may face.  I enjoy knowing that my time spent programming may make someone's daily work life a little
                    easier.
                </p>        
                <p style={pageStyles.paragraph}>
                    I am looking forward to continuing my career at a company where I can become a member of a team, contribute technically, and provide leadership from my years of experience
                    in the IT industry.
                </p>
            </div>                  
            </Grid>
            </Grid>
 </div>
 

  );
}