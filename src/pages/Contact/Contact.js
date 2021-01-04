import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PageHeader from '../../components/PageHeader/PageHeader'
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  buttonGreen: {
      marginTop: '10px',
      color: 'white',
      backgroundColor: '#5A674F'
  }
}));

export default function Contact() {
  const classes = useStyles();

  const [contactInfo, setContactInfo] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };  

  const sendEmail = (e) => {
    e.preventDefault();     
    emailjs.sendForm('gmail', 'contact_form', e.target, 'user_cUeBxGevFya5FJOZR0YzF')
    .then((result) => {
      handleOpenSnackBar();
      setContactInfo({contactInfo, user_name: "", user_email: "", message: ""});
    });
    setContactInfo({contactInfo, user_name: "", user_email: "", message: ""});
  }

  const handleContactChange = (event) => {    
    setContactInfo({...contactInfo,[event.target.name]: event.target.value})    
  }

  return (

  <div style={{marginTop: '60px', marginLeft: '100px', marginRight: '40px'}}>

    <PageHeader pageTitle='CONTACT'/>

    <form onSubmit={sendEmail} style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '20px', marginBottom: '10px'}}>    
      <Grid container spacing={3}>
        <Grid item xs={12} sm={11} md={8} lg={7}>
          <TextField 
            required 
            name="user_name"
            id="standard-required" 
            label="Name" 
            placeholder="Name"
            value={contactInfo.user_name}
            onChange={handleContactChange}
            style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={11} md={8} lg={7}>
          <TextField 
            required 
            name="user_email"
            id="standard-required" 
            type='email' 
            label="Email Address" 
            placeholder="Email Address"
            value={contactInfo.user_email}
            onChange={handleContactChange}
            style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={11} md={8} lg={7}>
          <TextField
            name="message"
            required
            id="standard-multiline"
            label="Message"
            multiline
            placeholder="Message"
            rows={6}
            onChange={handleContactChange}
            value={contactInfo.message}
            style={{width: '100%'}}/>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"   
            type='submit'                         
            className={classes.buttonGreen}                           
            >
              SEND EMAIL
          </Button>
        </Grid>
      </Grid>
    </form>
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnackBar}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Contact email sent"
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

    
  </div>

  );
}