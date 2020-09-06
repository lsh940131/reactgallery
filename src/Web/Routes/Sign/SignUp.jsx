import React, { useState, useEffect, useContext } from 'react';
import RootContext from '../../Context/RootContext';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/lsh940131?tab=repositories">
        Sangheon Lee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ history }){
  const { signUp } = useContext(RootContext);
  const classes = useStyles();
  
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState('email');
  const [areParamsInvalid, setAreParamsInvalid] = useState(true);
  
  const handleSignUp = async () => {
	try {
	  const response = await signUp({username, password, name, email});
	  // Fail
	  if(response.data.statusCode){
		alert(`Error ${response.data.statusCode} ${response.data.message}`);
	  }
	  // Succeass
	  else {
		alert(`Success sign up`);
		history.push('/signin');
	  }
	}
	catch (error) {
	  alert(error.message);
	  console.log(error);
	}
  }
  
  const goToSignIn = () => {
	  history.push('/signin');
  }
  
  useEffect(() => {
	  handleFillin();
  }, [username, password, passwordConfirm, name, email]);
  
  const handleFillin = () => {
	if(username && checkPassword(password) && checkPasswordConfirm(passwordConfirm) && name && checkEmail(email)){
		setAreParamsInvalid(false);
	} else {
		setAreParamsInvalid(true);
	}
	
	function checkPassword(password){
		return Boolean(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,20}$/.test(password));
	}
	function checkPasswordConfirm(passwordConfirm){
		if(password === passwordConfirm){
			return true;
		} else{
			return false;
		}
	}
	function checkEmail(email){
		if(email.indexOf('@naver.com') > -1){
			return true;
		}
		else{
			return false;
		}
	}
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
		  <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
				onChange={(e) => {
					setUsername(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.keyCode === 13 && areParamsInvalid === false) {
						handleSignUp();
					}
				}}
              />
            </Grid>
			<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.keyCode === 13 && !areParamsInvalid) {
						handleSignUp();
					}
				}}
              />
            </Grid>
			<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="PasswordConfirm"
                type="password"
                id="passwordConfirm"
				onChange={(e) => {
					setPasswordConfirm(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.keyCode === 13 && !areParamsInvalid) {
						handleSignUp();
					}
				}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
				onChange={(e) => {
					setName(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.keyCode === 13 && !areParamsInvalid) {
						handleSignUp();
					}
				}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.keyCode === 13 && !areParamsInvalid) {
						handleSignUp();	
					}
				}}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
			disabled={areParamsInvalid}
            className={classes.submit}
			onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button color="primary" component="span" onClick={goToSignIn}> Sign In </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}